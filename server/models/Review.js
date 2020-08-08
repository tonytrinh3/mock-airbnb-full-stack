const mongoose = require('mongoose');
const { Schema } = mongoose;


const reviewSchema = new Schema({
    userId: String,
    name: String,
    date: String,
    description: String,
    cleanliness: Number,
    check_in: Number,
    value: Number,
    accuracy: Number,
    communication: Number,
    location: Number,
    overall: Number,
    _userMongoId: {type:Schema.Types.ObjectId, ref: 'User'}
});

mongoose.model('review', reviewSchema)