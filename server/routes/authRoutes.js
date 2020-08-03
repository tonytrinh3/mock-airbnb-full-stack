const passport = require('passport');

module.exports = app =>{
    app.get(
        '/auth/google', 
        passport.authenticate('google',{
            scope: ['profile','email']
        })
    );
    
    app.get(
        '/auth/google/callback', 
        passport.authenticate('google'),
        (req,res)=>{
            res.redirect('/');
        }
    );

    app.get('/api/current_user',(req,res)=>{
        //test to see who logged via oauth flow, and logged into application, can now access user
        res.send(req.user); //response is what you get from this get. request is what comes into this 
    })

    app.get('/api/logout',(req,res) =>{
        req.logout(); //logout is a passport function
        res.redirect('/');
        //res.send(req.user); //to prove whoever signed in that they are signed out 
    });

}
