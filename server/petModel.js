const mongoose = require('mongoose');
require('./mongoose');

const PetSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, "Name is Required"], 
        minlength: 3
    },
    kind: {
        type: String,
        required: [true, "Kind is Required"],
        minlength: 3
    },
    description: {
        type: String,
        required: [true, "Description is Required"],
        minlength: 3
    },  
    skill1: {
        type: String
    },
    skill2: {
        type: String
    },
    skill3: {
        type: String
    }
}, {timestamps:true});

module.exports = { 
    Pet: mongoose.model('Pet', PetSchema)
}