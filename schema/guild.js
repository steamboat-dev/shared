const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const InfractionSchema = require("./infractions");

var GuildSchema = new Schema({
    guildID: {
        type: Number,
        required: true
    },
    modLog: {
        type: Number,
        required: false
    },
    infractions: {
        type: [InfractionSchema],
        required: true
    }
});

module.exports = mongoose.model('GuildConfig', GuildSchema);