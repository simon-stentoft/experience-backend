const express = require('express');

const {
    createExperience,
    getExperiences,
    getExperience,
    deleteExperience,
    updateExperience
} = require('../controllers/experienceController');

const router = express.Router();

//GET all experiences
router.get('/', getExperiences);

//GET one experience
router.get('/:id', getExperience);

// create/POST a new experience
router.post('/', createExperience);

// DELETE a specific experience
router.delete('/:id', deleteExperience);

// UPDATE a specific experience
router.patch('/:id', updateExperience);

module.exports = router;
