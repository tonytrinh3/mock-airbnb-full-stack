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
    _userMongoId: {type:Schema.Types.ObjectId, ref: 'User'},
});

mongoose.model('reservation', reservationSchema)