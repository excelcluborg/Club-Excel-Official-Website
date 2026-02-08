const express = require('express');
const router = express.Router();
const memberController = require('../controllers/memberController');
const { upload } = require('../config/cloudinaryConfig');
const auth = require('../middleware/auth');

router.get('/', memberController.getAllMembers);
router.post('/', auth, upload.single('img'), memberController.addMember);
router.put('/:id', auth, upload.single('img'), memberController.updateMember);
router.delete('/:id', auth, memberController.deleteMember);

module.exports = router;
