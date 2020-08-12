const mongoose = require('mongoose');
const { Schema } = mongoose;


const reviewSchema = new Schema({
    name: String,
    date: String,
    description: {
        type: String,
        required: [true, 'A review must have a description']
    },
    cleanliness: { //need to make a middleware or something to deal with this, like a function/array
        type: Number,
        default: 4.5,
        min: [1, 'Rating must be above 1.0'],
        max: [5, 'Rating must be below 5.0'],
        set: val => Math.round(val*10) / 10
    },
    check_in: {
        type: Number,
        default: 4.5,
        min: [1, 'Rating must be above 1.0'],
        max: [5, 'Rating must be below 5.0'],
        set: val => Math.round(val*10) / 10
    },
    value: {
        type: Number,
        default: 4.5,
        min: [1, 'Rating must be above 1.0'],
        max: [5, 'Rating must be below 5.0'],
        set: val => Math.round(val*10) / 10
    },
    accuracy: {
        type: Number,
        default: 4.5,
        min: [1, 'Rating must be above 1.0'],
        max: [5, 'Rating must be below 5.0'],
        set: val => Math.round(val*10) / 10
    },
    communication: {
        type: Number,
        default: 4.5,
        min: [1, 'Rating must be above 1.0'],
        max: [5, 'Rating must be below 5.0'],
        set: val => Math.round(val*10) / 10
    },
    location: {
        type: Number,
        default: 4.5,
        min: [1, 'Rating must be above 1.0'],
        max: [5, 'Rating must be below 5.0'],
        set: val => Math.round(val*10) / 10
    },
    overall: {
        type: Number,
        default: 4.5,
        min: [1, 'Rating must be above 1.0'],
        max: [5, 'Rating must be below 5.0'],
        set: val => Math.round(val*10) / 10
    },
    _userMongoId: {
        type: Schema.Types.ObjectId, 
        ref: 'user',
        required: [true, 'Review must belong to a user']
    },
    _bookingMongoId: {
        type: Schema.Types.ObjectId,
        ref: "booking",
        required: [true, "Review must belong to a booking"]
    }
});

mongoose.model('review', reviewSchema)