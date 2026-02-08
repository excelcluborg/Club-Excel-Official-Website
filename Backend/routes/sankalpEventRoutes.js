const express = require('express');
const router = express.Router();
const sankalpEventController = require('../controllers/sankalpEventController');
const { upload } = require('../config/cloudinaryConfig');
const auth = require('../middleware/auth');

router.post('/', auth, upload.single('bannerImg'), sankalpEventController.addSankalpEvent);
router.get('/', sankalpEventController.getAllSankalpEvents);
router.put('/:id', auth, upload.single('bannerImg'), sankalpEventController.updateSankalpEvent);
router.delete('/:id', auth, sankalpEventController.deleteSankalpEvent);

module.exports = router;
