const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    image: String,
    status: {
        type: Boolean,
        default: true
    },
    role: {
        type: String,
        enum: ['admin','user'],
        default: 'user'
    }
});

module.exports = mongoose.model('User', userSchema);