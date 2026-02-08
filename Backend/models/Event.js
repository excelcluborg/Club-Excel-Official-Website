const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    photos: {
        type: [String],
        default: []
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    noOfAttendies: {
        type: Number,
        default: 0
    },
    rules: {
        type: String,
        required: true
    },
    link: {
        type: String,
        default: ""
    },
    status: {
        type: String,
        enum: ['upcoming', 'completed'],
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Event', EventSchema);
