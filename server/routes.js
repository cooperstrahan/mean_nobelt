const petController = require('./petController');
const path = require('path');

module.exports = app => {
  app
    .get('/pets', petController.getAll)
    .get('/pets/:id', petController.getOne)
    .post('/pets', petController.createPet)
    .put('/pets/:id', petController.editPet)
    .delete('/pets/:id', petController.delete)
    .all("*", (req,res,next) => {
        res.sendFile(path.resolve('./public/dist/public/index.html'))
      });
}