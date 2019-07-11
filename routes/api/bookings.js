const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Booking = require('../../models/Booking');
const validateBookingInput = require('../../validation/bookings');

//get all bookings
router.get('/', (req, res) => {
    Booking.find()
        .then(bookings => res.json(bookings))
        .catch(err => res.status(404).json({nobookingsfound: 'No bookings found'}))
})

//get one booking
router.get('/:booking_id', (req, res) => {
    Booking.find({id: req.params.booking_id})
        .then(booking => res.json(booking))
        .catch(err => res.status(404).json({nobookingsfound: 'That booking was not found'}))
})

//create a booking
router.post('/', 
    passport.authenticate('jwt', { session: false }), 
    (req, res) => {
        const { errors, isValid } = validateBookingInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newBooking = new Booking({
            lair_id: req.lair.id,
            guest_id: req.user.id,
            num_guests: req.body.num_guests,
            arrival_date: req.body.arrival_date,
            departure_date: req.body.departure_date
        })

        newBooking.save().then(booking => res.json(booking));
})

//delete a booking
router.delete('/:booking_id', 
    passport.authenticate('jwt', { session: false }), 
    (req, res) => {
        Booking.find({id: req.params.booking_id})
            .then(booking => { booking.remove()
                                .then(function(){return res.sendStatus(204)})
                                .catch(err => res.json(err))
                            })
            .catch(err => res.status(404).json({nobookingsfound: 'That booking was not found'}))
    
})


//patch an already existing booking. can only update num_guests, arrival or departure date
router.put('/:booking_id', 
    passport.authenticate('jwt', { session: false }), 
    (req, res) => {
        Booking.find({id: req.params.booking_id})
            .then(booking => {
                //update the booking 
                booking.num_guests = req.body.num_guests || booking.num_guests
                booking.arrival_date = req.body.arrival_date || booking.arrival_date
                booking.departure_date = req.body.departure_date || booking.departure_date
                booking.save()
                    .then(booking => res.json(booking))
                    .catch(err => res.json(err))
            })
            .catch(err => res.status(404).json({nobookingsfound: 'That booking was not found'}))
    })

module.exports = router;