const Experience = require('../models/experienceModel');
const mongoose = require('mongoose');

//GET all experiences
const getExperiences = async (req, res) => {
    const experiences = await Experience.find({}).sort({createdAt: -1}) //sort by newest first

    res.status(200).json(experiences)
}

//GET one experience
const getExperience = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Experience not found'})
    }

    const experience = await Experience.findById(id)

    if(!experience) {
        return res.status(404).json({error: 'Experience not found'})
    }

    res.status(200).json(experience)
}

// create/POST a new experience
const createExperience = async (req, res) => {
    const {title, description, location, transportation, costs, security, date, duration, image, rating, otherPlacesToVisit} = req.body

    let emptyFields = []

    if(!title) {
        emptyFields.push('title')
    }
    if(!description) {
        emptyFields.push('description')
    }
    if(!location) {
        emptyFields.push('location')
    }
    if(emptyFields.length > 0) {
        return res.status(400).json({error: `Missing required fields: ${emptyFields.join(', ')}`})
    }
    
    //add document to database
    try {
      const experience = await Experience.create({title, description, location, transportation, costs, security, date, duration, image, rating, otherPlacesToVisit})
      res.status(200).json(experience)
    } catch (error) {
      res.status(400).json({error: error.message})
    }
}


// DELETE a specific experience
const deleteExperience = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Experience not found'})
    }

    //_id is the id of the document in the database
    const experience = await Experience.findOneAndDelete({_id: id})

    if(!experience) {
        return res.status(404).json({error: 'Experience not found'})
    }

    res.status(200).json(experience)
}


// UPDATE a specific experience
const updateExperience = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({error: 'No such experience'})
    }
  
    const experience = await Experience.findOneAndUpdate({_id: id}, {
      ...req.body
    })
  
    if (!experience) {
      return res.status(400).json({error: 'No such experience'})
    }
  
    res.status(200).json(experience)
}


module.exports = {
    createExperience,
    getExperiences,
    getExperience,
    deleteExperience,
    updateExperience
}
