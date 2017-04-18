const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const InfractionSchema = require("./infractions");
const SettingSchema = require('./settings');

var GuildSchema = new Schema({
    guildID: {
        type: Number,
        required: true
    },
    settings: {
        type: [SettingSchema],
        required: true
    },
    infractions: {
        type: [InfractionSchema],
        required: true
    }
});

module.exports = mongoose.model('GuildConfig', GuildSchema);