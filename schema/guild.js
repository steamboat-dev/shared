const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var GuildSchema = new Schema({
    guildID: {
        type: Number,
        required: true
    },
    modLog: {
        type: Number,
        required: false
    }
});