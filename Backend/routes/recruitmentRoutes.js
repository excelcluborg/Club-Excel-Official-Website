const express = require('express');
const router = express.Router();
const recruitmentController = require('../controllers/recruitmentController');
const auth = require('../middleware/auth');

router.get('/settings', recruitmentController.getSettings);
router.put('/settings', auth, recruitmentController.updateSettings);
router.get('/', auth, recruitmentController.getAllRecruits);
router.post('/', recruitmentController.addRecruit);
router.put('/:id', auth, recruitmentController.updateRecruit);
router.delete('/:id', auth, recruitmentController.deleteRecruit);

// Specific delete all recruitment endpoint as requested
router.delete('/recruitmentdelete', auth, recruitmentController.deleteAllRecruits);

module.exports = router;
