const mongoose = require('mongoose');

const MemberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    color: {
        type: String,
        default: ""
    },
    img: {
        type: String,
        required: true
    },
    linkedin: {
        type: String,
        default: ""
    },
    category: {
        type: String,
        enum: ['alumni', 'member', 'advisor'],
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Member', MemberSchema);
