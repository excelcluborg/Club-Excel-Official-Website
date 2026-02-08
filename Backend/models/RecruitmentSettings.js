const mongoose = require('mongoose');

const RecruitmentSettingsSchema = new mongoose.Schema({
    whatsappLink: {
        type: String,
        default: ""
    }
}, { timestamps: true });

module.exports = mongoose.model('RecruitmentSettings', RecruitmentSettingsSchema);
