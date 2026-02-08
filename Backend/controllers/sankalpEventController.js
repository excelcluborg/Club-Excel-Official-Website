const SankalpEvent = require('../models/SankalpEvent');
const { uploadToCloudinary } = require('../config/cloudinaryConfig');

// POST add sankalp event
exports.addSankalpEvent = async (req, res) => {
    try {
        const eventData = { ...req.body };

        if (req.file) {
            const result = await uploadToCloudinary(req.file.buffer);
            eventData.bannerImg = result.secure_url;
        }

        const newEvent = new SankalpEvent(eventData);
        const savedEvent = await newEvent.save();
        res.status(201).json(savedEvent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// GET all sankalp events
exports.getAllSankalpEvents = async (req, res) => {
    try {
        const events = await SankalpEvent.find();
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// UPDATE sankalp event
exports.updateSankalpEvent = async (req, res) => {
    try {
        const updateData = { ...req.body };

        if (req.file) {
            const result = await uploadToCloudinary(req.file.buffer);
            updateData.bannerImg = result.secure_url;
        }

        const updatedEvent = await SankalpEvent.findByIdAndUpdate(req.params.id, updateData, { new: true });
        if (!updatedEvent) return res.status(404).json({ message: "Sankalp Event not found" });
        res.status(200).json(updatedEvent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// DELETE sankalp event
exports.deleteSankalpEvent = async (req, res) => {
    try {
        const deletedEvent = await SankalpEvent.findByIdAndDelete(req.params.id);
        if (!deletedEvent) return res.status(404).json({ message: "Sankalp Event not found" });
        res.status(200).json({ message: "Sankalp Event deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
