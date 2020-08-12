// const requireLogin = require('../middlewares/requireLogin');
const mongoose = require ('mongoose');
const Booking = mongoose.model('booking'); 

module.exports = app => {

    app.get('/api/bookings', async (req,res) => {
        
        const booking = await Booking.find({ });
        // const reservation = await Reservation.find({ bookingId: 9 });
        // console.log(reservation);  
        res.send(booking);

    });


}



