const mongoose = require('mongoose');
const db = require("../config/keys.js").mongoURI;

mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(`${err}: Cannot connect to MongoDB`));

const Lair = require('../models/Lair');
const User = require('../models/User');
const Booking = require('../models/Booking');

const seedBookings = () => {
    Booking.deleteMany({}, (err) => { console.log(err) });
    return new Promise((res, rej) => {
        User.findOne({ username: "Demo User" })
            .then(user => {
                Lair.findOne({ name: "Thai Island" })
                    .then(lair => {
                        let arrDate = new Date();
                        arrDate.setDate(33);
                        let depDate = new Date();
                        depDate.setDate(38);
                        newBooking = new Booking({
                          lair_id: lair.id,
                          guest_id: user.id,
                          num_guests: 2,
                          arrival_date: arrDate,
                          departure_date: depDate
                        });
                        newBooking.save().then(booking => {
                            console.log(`Success: booking was created`);
                        }, err => { console.log(`booking was unable to save due to: ${err}`) })
                    })
            })

        User.findOne({ username: "Demo User" })
            .then(user => {
                Lair.findOne({ name: "Death Star II" })
                    .then(lair => {
                        let arrDate = new Date();
                        arrDate.setDate(39);
                        let depDate = new Date();
                        depDate.setDate(42);
                        newBooking = new Booking({
                            lair_id: lair.id,
                            guest_id: user.id,
                            num_guests: 6,
                            arrival_date: arrDate,
                            departure_date: depDate
                        });
                        newBooking.save().then(booking => {
                            console.log(`Success: booking was created`);
                        }, err => { console.log(`booking was unable to save due to: ${err}`) })
                    })
            })

        User.findOne({ username: "Demo User" })
            .then(user => {
                Lair.findOne({ name: "Maleficent's Castle" })
                    .then(lair => {
                        let arrDate = new Date();
                        arrDate.setDate(44);
                        let depDate = new Date();
                        depDate.setDate(60);
                        newBooking = new Booking({
                            lair_id: lair.id,
                            guest_id: user.id,
                            num_guests: 2,
                            arrival_date: arrDate,
                            departure_date: depDate
                        });
                        newBooking.save().then(booking => {
                            console.log(`Success: booking was created`);
                        }, err => { console.log(`booking was unable to save due to: ${err}`) })
                    })
            })

        User.findOne({ username: "Demo User" })
            .then(user => {
                Lair.findOne({ name: "Meth Lab RV" })
                    .then(lair => {
                        let arrDate = new Date();
                        arrDate.setDate(70);
                        let depDate = new Date();
                        depDate.setDate(100);
                        newBooking = new Booking({
                            lair_id: lair.id, 
                            guest_id: user.id,
                            num_guests: 1,
                            arrival_date: arrDate,
                            departure_date: depDate
                        });
                        newBooking.save().then(booking => {
                            console.log(`Success: booking was created`);
                        }, err => { console.log(`booking was unable to save due to: ${err}`) })
                    })
            })
    })
}



seedBookings().then(res => { mongoose.connection.close() });