const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var SettingSchema = new Schema({
    modLogID: {
        // Snowflake of the modlog channel
        type: Number,
        required: false
    },
    muteRoleID: {
        // Snowflake of the mute role ID
        type: Number,
        required: false
    },
    filterInvites: {
        // Should the bot remove all invite URLs?
        type: Boolean,
        required: false,
        default: true
    },
    persistMute: {
        // Should the mute role perist on leave and rejoin?
        type: Boolean,
        required: false,
        default: false
    }
});

module.exports = SettingSchema;