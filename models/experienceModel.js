const mongoose = require('mongoose');

//function to create a new schema
const Schema = mongoose.Schema;

const experienceSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required:true
    },
    location: {
        type: String,
        required: true
    },
    transportation: {
        type: String,
        required: false
    },
    costs: {
        type: Number,
        required: false
    },
    security: {
        type: String,
        required: false
    }, 
    date: {
        type: Date, //Date
        required: false
    },
    duration: {
        type: Number,
        required: false
    },
    image: {
        type: String,
        required: false
    },
    rating: {
        type: Number,
        required: false
    },
    otherPlacesToVisit: {
        type: String,
        required: false
    },
}, {timestamps: true});


module.exports = mongoose.model('Experience', experienceSchema);