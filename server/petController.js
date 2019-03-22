const { Pet } = require('./petModel');

module.exports = {

  getAll: (req, res) => {
    Pet.find()
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  getOne: (req, res) => {
    const ID = req.params.id;
    Pet.findOne({_id:ID})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  createPet: (req, res) => {
    const DATA = req.body;
    console.log(DATA);
    Pet.create(DATA, {runValidators:true, new:true})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  editPet: (req, res) => {
    const ID = req.params.id;
    const DATA = req.body;
    Pet.updateOne({_id:ID}, DATA, {runValidators:true, new:true})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  delete: (req, res) => {
    const ID = req.params.id;
    Pet.findOneAndDelete({_id:ID})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },
}