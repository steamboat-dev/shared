const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSchema = new Schema({
    id: {
        type: String,
        unique: true,
        required: true
    },
    permissions: {
        type: Number,
        default: 0
    }
});

module.exports = UserSchema