const mongoose = require('mongoose');

module.exports = {
    mongoose: mongoose.connect('mongodb://localhost/pet_data', 
        {useNewUrlParser: true})
}