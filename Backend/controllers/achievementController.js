const Achievement = require('../models/Achievement');
const { uploadToCloudinary } = require('../config/cloudinaryConfig');

// POST add achievement
exports.addAchievement = async (req, res) => {
    try {
        const achievementData = { ...req.body };

        if (req.files && req.files.photos) {
            const uploadPromises = req.files.photos.map(file => uploadToCloudinary(file.buffer));
            const results = await Promise.all(uploadPromises);
            achievementData.photos = results.map(result => result.secure_url);
        }

        const newAchievement = new Achievement(achievementData);
        const savedAchievement = await newAchievement.save();
        res.status(201).json(savedAchievement);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// GET all achievements
exports.getAllAchievements = async (req, res) => {
    try {
        const achievements = await Achievement.find().sort({ createdAt: -1 });
        res.status(200).json(achievements);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// UPDATE achievement
exports.updateAchievement = async (req, res) => {
    try {
        const updateData = { ...req.body };

        if (req.files && req.files.photos) {
            const uploadPromises = req.files.photos.map(file => uploadToCloudinary(file.buffer));
            const results = await Promise.all(uploadPromises);
            updateData.photos = results.map(result => result.secure_url);
        }

        const updatedAchievement = await Achievement.findByIdAndUpdate(req.params.id, updateData, { new: true });
        if (!updatedAchievement) return res.status(404).json({ message: "Achievement not found" });
        res.status(200).json(updatedAchievement);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// DELETE achievement
exports.deleteAchievement = async (req, res) => {
    try {
        const deletedAchievement = await Achievement.findByIdAndDelete(req.params.id);
        if (!deletedAchievement) return res.status(404).json({ message: "Achievement not found" });
        res.status(200).json({ message: "Achievement deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
