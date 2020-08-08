const mongoose = require('mongoose');
const {Schema} = mongoose; 
const HostSchema = require('./Host');
const ReviewSchema = require('./Review');

const bookingSchema = new Schema ({
    title: String,
    location: String,
    lat: Number,
    lng: Number,
    description: String,
    imgs: Schema.Types.Mixed,
    price: Number,
    currency: String,
    home_type: String,
    space_type: String,
    home_specs: Schema.Types.Mixed,
    self_check_in: Boolean,
    check_in: String,
    check_out: String,
    sleeping_arrangements:Schema.Types.Mixed,
    house_rules: Schema.Types.Mixed,
    cancellations:Schema.Types.Mixed,
    amenities: [String],
    availability:Schema.Types.Mixed,
    reviews:[ReviewSchema],
    host_info: HostSchema
});

mongoose.model('booking', bookingSchema);