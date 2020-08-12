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
    home_specs: {
        numGuests: Number,
        numBedrooms: Number,
        numBeds: Number,
        numBaths: {
            privates: Number,
            shared: Boolean
        }
    },
    self_check_in: Boolean,
    check_in: String,
    check_out: String,
    sleeping_arrangements:{
        bedroom_1:{
            queen_bed: Number,
            king_bed: Number,
            double_bed: Number,
            sofa_bed: Number,
        },
        common_spaces:{
            queen_bed: Number,
            king_bed: Number,
            double_bed: Number,
            sofa_bed: Number,
        },
    },
    house_rules: {
        smoking: Boolean,
        pets: Boolean,
        parties: Boolean
    },
    cancellations:{
        refundable: Boolean,
        cancellation_type: String
    },
    amenities: [String],
    availability:Schema.Types.Mixed,
    reviews:[ReviewSchema],
    host_info: HostSchema
});

mongoose.model('booking', bookingSchema);