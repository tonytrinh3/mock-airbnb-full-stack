const mongoose = require('mongoose');
const { Schema } = mongoose;


const hostSchema = new Schema({
    userId: String,
    name: String,
    img: String,
    date_joined: String,
    location: String,
    identity_verified: Boolean,
    superhost: Boolean,
    description: String,
    interaction_guest: String,
    languages: [String],
    living_wage_pledge: Boolean,
    response_rate: Number,
    response_time: Number
});

mongoose.model('host', hostSchema)