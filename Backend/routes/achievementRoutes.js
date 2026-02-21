const express = require('express');
const router = express.Router();
const achievementController = require('../controllers/achievementController');
const galleryController = require('../controllers/galleryController');
const { upload } = require('../config/cloudinaryConfig');
const auth = require('../middleware/auth');

// Achievement routes
router.post('/achievements', auth, upload.fields([{ name: 'photos', maxCount: 10 }]), achievementController.addAchievement);
router.get('/achievements', achievementController.getAllAchievements);
router.put('/achievements/:id', auth, upload.fields([{ name: 'photos', maxCount: 10 }]), achievementController.updateAchievement);
router.delete('/achievements/:id', auth, achievementController.deleteAchievement);

// Gallery routes
router.post('/gallery', auth, upload.fields([{ name: 'photos', maxCount: 20 }]), galleryController.addGalleryItem);
router.get('/gallery', galleryController.getAllGalleryItems);
router.put('/gallery/:id', auth, upload.fields([{ name: 'photos', maxCount: 20 }]), galleryController.updateGalleryItem);
router.delete('/gallery/:id', auth, galleryController.deleteGalleryItem);

module.exports = router;
