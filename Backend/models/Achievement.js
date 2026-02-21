const mongoose = require('mongoose');

const achievementSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    photos: {
        type: [String],
        default: []
    }
}, { timestamps: true });

module.exports = mongoose.model('Achievement', achievementSchema);
