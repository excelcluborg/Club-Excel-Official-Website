const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
    groupName: {
        type: String,
        trim: true
    },
    photos: {
        type: [String],
        required: true,
        default: []
    }
}, { timestamps: true });

module.exports = mongoose.model('Gallery', gallerySchema);
