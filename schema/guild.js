const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const InfractionSchema = require("./infractions");
const SettingSchema = require('./settings');
const RoleSchema = require('./role');
const CommandSchema = require('./command');

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
    },
    roles: {
        type: [RoleSchema],
        required: true
    },
    commands: {
        type: [CommandSchema],
        required: true
    }
});

module.exports = mongoose.model('GuildConfig', GuildSchema);