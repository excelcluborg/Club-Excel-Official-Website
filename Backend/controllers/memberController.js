const Member = require('../models/Member');
const { uploadToCloudinary } = require('../config/cloudinaryConfig');

// GET all members
exports.getAllMembers = async (req, res) => {
    try {
        const members = await Member.find();
        res.status(200).json(members);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// POST add member
exports.addMember = async (req, res) => {
    try {
        const memberData = { ...req.body };

        if (req.file) {
            const result = await uploadToCloudinary(req.file.buffer);
            memberData.img = result.secure_url;
        }

        const newMember = new Member(memberData);
        const savedMember = await newMember.save();
        res.status(201).json(savedMember);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// UPDATE member
exports.updateMember = async (req, res) => {
    try {
        const updateData = { ...req.body };

        if (req.file) {
            const result = await uploadToCloudinary(req.file.buffer);
            updateData.img = result.secure_url;
        }

        const updatedMember = await Member.findByIdAndUpdate(req.params.id, updateData, { new: true });
        if (!updatedMember) return res.status(404).json({ message: "Member not found" });
        res.status(200).json(updatedMember);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// DELETE member
exports.deleteMember = async (req, res) => {
    try {
        const deletedMember = await Member.findByIdAndDelete(req.params.id);
        if (!deletedMember) return res.status(404).json({ message: "Member not found" });
        res.status(200).json({ message: "Member deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
