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
                newBooking = new Booking({
                    lair_id: Lair.findOne({ name: "Thai Island" }),
                    guest_id: user.id,
                    num_guests: 2,
                    arrival_date: "2019 - 09 - 17T19: 00: 00.000 + 00: 00",
                    departure_date: "2019 - 09 - 20T19: 00: 00.000 + 00: 00"
                });
                newBooking.save().then(booking => {
                    console.log(`Success: booking was created`);
                }, err => { console.log(`booking was unable to save due to: ${err}`) })
            })

        User.findOne({ username: "Demo User" })
            .then(user => {
                newBooking = new Booking({
                    lair_id: Lair.findOne({ name: "Death Star II" }),
                    guest_id: user.id,
                    num_guests: 6,
                    arrival_date: "2019 - 09 - 21T19: 00: 00.000 + 00: 00",
                    departure_date: "2019 - 09 - 24T19: 00: 00.000 + 00: 00"
                });
                newBooking.save().then(booking => {
                    console.log(`Success: booking was created`);
                }, err => { console.log(`booking was unable to save due to: ${err}`) })
            })

        User.findOne({ username: "Demo User" })
            .then(user => {
                newBooking = new Booking({
                    lair_id: Lair.findOne({ name: "Meth Lab RV" }),
                    guest_id: user.id,
                    num_guests: 2,
                    arrival_date: "2019 - 10 - 10T19: 00: 00.000 + 00: 00",
                    departure_date: "2019 - 10 - 12T19: 00: 00.000 + 00: 00"
                });
                newBooking.save().then(booking => {
                    console.log(`Success: booking was created`);
                }, err => { console.log(`booking was unable to save due to: ${err}`) })
            })

        User.findOne({ username: "Demo User" })
            .then(user => {
                newBooking = new Booking({
                    lair_id: Lair.findOne({ name: "Dracula's Castle" }), 
                    guest_id: user.id,
                    num_guests: 1,
                    arrival_date: "2019 - 11 - 15T19: 00: 00.000 + 00: 00",
                    departure_date: "2019 - 11 - 17T19: 00: 00.000 + 00: 00"
                });
                newBooking.save().then(booking => {
                    console.log(`Success: booking was created`);
                }, err => { console.log(`booking was unable to save due to: ${err}`) })
            })
    })
}



seedBookings().then(res => { mongoose.connection.close() });