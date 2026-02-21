const Gallery = require('../models/Gallery');
const { uploadToCloudinary } = require('../config/cloudinaryConfig');

// POST add gallery item
exports.addGalleryItem = async (req, res) => {
    try {
        const galleryData = { ...req.body };

        if (req.files && req.files.photos) {
            const uploadPromises = req.files.photos.map(file => uploadToCloudinary(file.buffer));
            const results = await Promise.all(uploadPromises);
            galleryData.photos = results.map(result => result.secure_url);
        }

        const newGalleryItem = new Gallery(galleryData);
        const savedGalleryItem = await newGalleryItem.save();
        res.status(201).json(savedGalleryItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// GET all gallery items
exports.getAllGalleryItems = async (req, res) => {
    try {
        const galleryItems = await Gallery.find().sort({ createdAt: -1 });
        res.status(200).json(galleryItems);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// UPDATE gallery item
exports.updateGalleryItem = async (req, res) => {
    try {
        const updateData = { ...req.body };

        if (req.files && req.files.photos) {
            const uploadPromises = req.files.photos.map(file => uploadToCloudinary(file.buffer));
            const results = await Promise.all(uploadPromises);
            updateData.photos = results.map(result => result.secure_url);
        }

        const updatedGalleryItem = await Gallery.findByIdAndUpdate(req.params.id, updateData, { new: true });
        if (!updatedGalleryItem) return res.status(404).json({ message: "Gallery item not found" });
        res.status(200).json(updatedGalleryItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// DELETE gallery item
exports.deleteGalleryItem = async (req, res) => {
    try {
        const deletedGalleryItem = await Gallery.findByIdAndDelete(req.params.id);
        if (!deletedGalleryItem) return res.status(404).json({ message: "Gallery item not found" });
        res.status(200).json({ message: "Gallery item deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
