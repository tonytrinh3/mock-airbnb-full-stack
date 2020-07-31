const passport = require('passport');
const GoogleStrategy = require ('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');


const User = mongoose.model('users'); 

//user is a mongoose modle instance. and turn it into user.id
passport.serializeUser((user,done)=>{
    done(null,user.id);//null is the error catch 
    //user.id is not profile id. user id is the just the id of each user record that mongodb assign to each record 
});//les 44, re watch. passport takes google id info and builds cookie into browser 

// //pull user out of cookie and turn them into user for mongoose 
passport.deserializeUser( async (id,done)=>{
    // User.findById(id)
    //     .then(user=>{
    //         done(null,user)
    //     });

  const user = await User.findById(id);
  done(null,user);
      
});



passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback',
            proxy: true
        },
        async (accessToken, refreshToken, profile, done) =>{
            //async code. mongoose query
            const existingUser = await User.findOne({googleId: profile.id}); //existingUser is the result of the promise
            if(existingUser){
                //we have a record with the givine profile id
                done(null,existingUser);//this is a passport function
                //done function tells passport we are finish creating a user and resume auth process
            } else{
                //we don't have a user record with this ID, make a new record
                //model instance that we created
                const user = await new User({ googleId: profile.id }).save()
                done(null,user);
                // function on method that will take the model instance and save in mongodb
                //anything that is done to mongodb is async
            }
        }
    )
);//new GoogleStrat class


