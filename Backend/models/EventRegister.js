const mongoose = require('mongoose');

const EventRegisterSchema = new mongoose.Schema({
    eventname: {
        type: String,
        required: true
    },
    fullname: {
        type: String,
        required: true
    },
    phoneno: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    rollno: {
        type: String,
        required: true
    },
    locality: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('EventRegister', EventRegisterSchema);
