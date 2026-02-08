const Contact = require('../models/Contact');

// POST add contact request
exports.addContact = async (req, res) => {
    try {
        const newContact = new Contact(req.body);
        const savedContact = await newContact.save();
        res.status(201).json(savedContact);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// GET all contacts
exports.getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// DELETE one contact
exports.deleteContact = async (req, res) => {
    try {
        const deletedContact = await Contact.findByIdAndDelete(req.params.id);
        if (!deletedContact) return res.status(404).json({ message: "Contact not found" });
        res.status(200).json({ message: "Contact deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// DELETE all contacts
exports.deleteAllContacts = async (req, res) => {
    try {
        await Contact.deleteMany({});
        res.status(200).json({ message: "All contact requests deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
