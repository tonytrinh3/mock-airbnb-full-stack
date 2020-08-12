const mongoose = require('mongoose');
const { Schema } = mongoose;

const reservationSchema = new Schema({
    userId: String,
    bookingId: Number,
    startDate: String,
    endDate: String,
    numAdults: Number,
    numChildren: Number,
    numInfants: Number,
    titles: String,
    description: String,
    location: String,
    imgs: Schema.Types.Mixed,
    _userMongoId: {
        type: Schema.Types.ObjectId, 
        ref: 'user',
        required: [true, 'Review must belong to a user']
    },
    // _bookingMongoId: {
    //     type: Schema.Types.ObjectId,
    //     ref: "booking",
    //     required: [true, "Review must belong to a booking"]
    // }
});

mongoose.model('reservation', reservationSchema)