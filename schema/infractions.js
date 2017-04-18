const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var InfractionSchema = new Schema({
    moderatorID: {
        type: Number,
        required: true
    },
    targetID: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    reason: {
        type: String,
        required: false,
        default: "No reason given"
    },
    time: {
        type: Date(),
        required: false,
        default: new Date()
    }
});

module.exports = InfractionSchema;