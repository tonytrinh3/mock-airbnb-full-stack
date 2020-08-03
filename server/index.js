const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport'); //passport to use cookieSession
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');
const authRoutes = require('./routes/authRoutes');

mongoose.connect(keys.mongoURI);


const app = express();

//middleware
app.use(bodyParser.json());//les 109 return to it
app.use(
    cookieSession({
        maxAge: 30*24*60*60*1000,
        //how long this cookie will last in browser
        //want cookie to last for 30 days
        //need to be passed in milliseconds
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);
require('./routes/billingRoutes')(app);

// app.get('/',(req,res) =>{
//     res.send({hi:'there'});
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT);