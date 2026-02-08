const Recruitment = require('../models/Recruitment');
const RecruitmentSettings = require('../models/RecruitmentSettings');

// GET recruitment settings
exports.getSettings = async (req, res) => {
    try {
        let settings = await RecruitmentSettings.findOne();
        if (!settings) {
            settings = new RecruitmentSettings({ whatsappLink: "" });
            await settings.save();
        }
        res.status(200).json(settings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// UPDATE recruitment settings
exports.updateSettings = async (req, res) => {
    try {
        let settings = await RecruitmentSettings.findOne();
        if (!settings) {
            settings = new RecruitmentSettings(req.body);
        } else {
            settings.whatsappLink = req.body.whatsappLink;
        }
        const savedSettings = await settings.save();
        res.status(200).json(savedSettings);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// GET all recruits
exports.getAllRecruits = async (req, res) => {
    try {
        const recruits = await Recruitment.find();
        res.status(200).json(recruits);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// POST add recruit
exports.addRecruit = async (req, res) => {
    try {
        const newRecruit = new Recruitment(req.body);
        const savedRecruit = await newRecruit.save();
        res.status(201).json(savedRecruit);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// UPDATE recruit
exports.updateRecruit = async (req, res) => {
    try {
        const updatedRecruit = await Recruitment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedRecruit) return res.status(404).json({ message: "Recruit not found" });
        res.status(200).json(updatedRecruit);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// DELETE one recruit
exports.deleteRecruit = async (req, res) => {
    try {
        const deletedRecruit = await Recruitment.findByIdAndDelete(req.params.id);
        if (!deletedRecruit) return res.status(404).json({ message: "Recruit not found" });
        res.status(200).json({ message: "Recruit deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// DELETE all recruits
exports.deleteAllRecruits = async (req, res) => {
    try {
        await Recruitment.deleteMany({});
        res.status(200).json({ message: "All recruits deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
