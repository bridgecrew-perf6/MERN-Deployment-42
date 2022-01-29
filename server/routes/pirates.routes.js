const PirateController = require('../controllers/pirates.controllers');
console.log("this is the product controller", PirateController);
const { findAll, findOne, create, update, deleteOne  } = require('../controllers/pirates.controllers') //destructuring controllers

module.exports = app => {


    app.get('/api/pirates', findAll); //read all
    app.get('/api/pirates/:id', findOne); //read one
    app.post('/api/pirates/', create); //create
    app.put('/api/pirates/:id', update); //update
    app.delete('/api/pirates/:id', deleteOne); //delete
}
//these routes follow RESTful conventions