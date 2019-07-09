const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookingSchema = new Schema({
    lair_id: {
        type: Schema.Types.ObjectId,
        ref: 'lairs',
        required: true
    }, 
    guest_id: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    }, 
    num_guests: {
        type: Number,
        required: true
    },
    arrival_date: {
        type: Date,
        required: true
    },
    departure_date: {
        type: Date,
        required: true
    }
})

module.exports = Booking = mongoose.model('booking', BookingSchema);