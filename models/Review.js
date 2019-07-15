const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    accuracy: {
        type: Number,
        required: true
    },
    communication: {
        type: Number,
        required: true
    },
    cleanliness: {
        type: Number,
        required: true
    },
    location: {
        type: Number,
        required: true
    },
    check_in: {
        type: Number,
        required: true
    },
    value: {
        type: Number,
        required: true
    },
    body: {
        type: String,
        required: true
    }, 
    guest_id: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    }, 
    lair_id: {
        type: Schema.Types.ObjectId,
        ref: 'lairs',
        required: true
    }, 
})

module.exports = Review = mongoose.model('review', ReviewSchema);