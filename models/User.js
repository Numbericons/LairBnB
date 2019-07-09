const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    image_url: {
        type: String,
    },
    host_description: {
        type: String
    }
})

module.exports = User = mongoose.model('users', UserSchema);