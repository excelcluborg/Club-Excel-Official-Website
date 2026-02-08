const express = require('express');
const router = express.Router();
const sankalpRegisterController = require('../controllers/sankalpRegisterController');
const auth = require('../middleware/auth');

router.post('/', sankalpRegisterController.addRegistration);
router.get('/', auth, sankalpRegisterController.getAllRegisters);
router.put('/:id', auth, sankalpRegisterController.updateRegistration);
router.delete('/:id', auth, sankalpRegisterController.deleteRegistration);

// Specific delete all registers endpoint as requested
router.delete('/sankalpdelete', auth, sankalpRegisterController.deleteAllRegisters);

module.exports = router;
