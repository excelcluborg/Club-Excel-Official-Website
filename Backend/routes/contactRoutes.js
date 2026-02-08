const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');
const auth = require('../middleware/auth');

router.post('/', contactController.addContact);
router.get('/', auth, contactController.getAllContacts);
router.delete('/:id', auth, contactController.deleteContact);
router.put('/:id', auth, contactController.updateContact);

// Specific delete all contacts endpoint as requested
router.delete('/contactsdelete', auth, contactController.deleteAllContacts);

module.exports = router;
