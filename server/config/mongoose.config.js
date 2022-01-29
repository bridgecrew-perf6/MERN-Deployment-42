const mongoose = require('mongoose')

//alternate way to connect to DB
module.exports = (DB_NAME) => {
    mongoose.connect(`mongodb://localhost/${DB_NAME}`)
    .then( () => console.log(`connected to ${DB_NAME}`))
    .catch( err => console.log('cannot connect to DB', err));
}