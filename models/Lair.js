const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LairSchema = new Schema({
    name: {
        type: String,
        required: true
    }, 
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    lat: {
        type: Number,
        required: true
    },
    lng: {
        type: Number,
        required: true
    },
    city: {
        type: String
    },
    country: {
        type: String,
        required: true
    },
    rate: {
        type: String,
        required: true
    },
    max_guests: {
        type: Number,
        required: true
    },
    type: {
        type: Number,
        required: true
    },
    owner_id: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    torture_chamber: {
        type: Boolean,
        default: false
    },
    minions: {
        type: Boolean,
        default: false
    },
    wifi: {
        type: Boolean,
        default: false
    },
    hero_detector: {
        type: Boolean,
        default: false
    },
    pool: {
        type: Boolean,
        default: false
    },
    cemetery: {
        type: Boolean,
        default: false
    }
})

module.exports = Lair = mongoose.model('lair', LairSchema);