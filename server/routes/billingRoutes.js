const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');


module.exports = app => {
    //requireLogin isn't called immediate bc you don't want it to be run when the route is reached
    //you want the function to be called internally by express 
    app.post('/api/stripe', requireLogin, async (req,res)=>{

        if (!req.user){
            return res.status(401).send({error: 'You must log in!'})
        }



        //without async await, you just get a Promise{ <pending> }
        const charge = await stripe.charges.create({
            amount: 500, //5 dollar
            currency: 'usd',
            description: '$5 for 5 credits',
            //req.body is what is between {} in the request
            //req is things coming into this one http request from front end
            //res is what is sent out to this http page
            source: req.body.id //the id you get from the transaction. specify a source proerpty which specifies what credit card or what wascharged 
        });

        //credits is added userSchema credit
        req.user.credits += 5;//set up auto by passport; user model
        //represent the same user, but you want to make sure you are using the newest user
        //user is from userSchema 
        const user = await req.user.save(); //.save() is a mongodb thing

        //res is what is sent out to this http page, the browser
        res.send(user);//send() is an express method

    });
};