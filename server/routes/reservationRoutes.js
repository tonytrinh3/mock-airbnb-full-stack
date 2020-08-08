const requireLogin = require('../middlewares/requireLogin');
const mongoose = require ('mongoose');
const Reservation = mongoose.model('reservation'); 

module.exports = app => {

    app.get('/api/reservations', async (req,res) => {
        
        const reservation = await Reservation.find({ _userMongoId: req.user.id });
        // const reservation = await Reservation.find({ bookingId: 9 });
        // console.log(reservation);  
        res.send(reservation);

    });

    app.post('/api/reservations',requireLogin, async(req,res) =>{
        const {
            userId,
            bookingId,
            startDate,
            endDate,
            numAdults,
            numChildren,
            numInfants,
            titles,
            description,
            location,
            imgs
        } = req.body;

        const reservation = new Reservation({
            userId,
            bookingId,
            startDate,
            endDate,
            numAdults,
            numChildren,
            numInfants,
            titles,
            description,
            location,
            imgs,
            _userMongoId: req.user.id,
        });

        try {
            //async function
     
            await reservation.save();


            res.send(reservation);
           } catch (err) {
               //422 means something is wrong with data you sent to us
               res.status(422).send(err);
           };

    })

}