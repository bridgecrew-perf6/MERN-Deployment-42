const mongoose = require('mongoose');

const PirateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "{PATH} must be present!"]
    },

    url: {
        type: String,
        required: [true, "Please provide a {PATH} for this pirate!"]
    },

    treasure:
    {
        type: Number,
        required: [true, "Please provide how much {PATH} this pirate has!"]
    },

    phrase: {
        type: String,
        required: [true, "Every pirate has a {PATH}! Please provide one!"]
    },

    position: {
        type: String,
        required: [true, "Please choose a crew {PATH}!"]
    },

    pegleg: {
        type: Boolean,
        default: true,
        required: [true]
    },

    eyepatch: {
        type: Boolean,
        default: true,
        required: [true]
    },

    hookhand: {
        type: Boolean,
        default: true,
        required: [true]
    }
}, {timestamps: true})

//make NoteSchema an export
const Pirate = mongoose.model("Pirate", PirateSchema)
module.exports = Pirate;