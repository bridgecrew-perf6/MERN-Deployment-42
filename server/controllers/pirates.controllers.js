const Pirate = require('../models/pirates.models')

module.exports = {
    //READ ALL
    findAll : (req, res) => {
        Pirate.find()
        //what we return here is what we receive in REACT
        //if the promise is successful, returns an array which is default, here we return an object
        .then(allPirates => res.json(allPirates))
        .catch(err => res.json({message: "hmmm .. something went wrong", error: err}));
    },

    //READ ONE
    findOne : (req, res) => {
        Pirate.findById(req.params.id) //better to find by id so you can get specific item, i.e find by name will pull first item matching search parameter not any specific one
        .then(singlePirate => res.json(singlePirate))
        .catch ( err => res.json({ message: 'hmmm .. something went wrong', error: err}));
    },

    //CREATE
    create : (req, res) => {
        console.log(req.boy);
        Pirate.create(req.body)
        .then(newPirate => res.json(newPirate))
        .catch(err => res.status(400).json({ message: 'hmmm.. something went wrong', error: err}));
    },

    //UPDATE
    update : (req, res) => {
        Pirate.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true}) //we run validators for update because it is not automatic like it is for create function, will return new object when updated
        .then(updatedPirate => res.json(updatedPirate))
        .catch( err => res.json({ message: 'hmmm.. something went wrong', error: err}))
    },

    //DELETE
    deleteOne : (req, res) => {
        Pirate.findByIdAndDelete(req.params.id)
        .then(result => res.json(result))
        .catch( err => res.json({ message: 'hmmm.. something went wrong', error: err}))
    }
}