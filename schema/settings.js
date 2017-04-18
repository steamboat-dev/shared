const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var SettingSchema = new Schema({
    modLogID: {
        type: Number,
        required: false
    },
    muteRoleID: {
        type: Number,
        required: false
    },
    filterInvites: {
        type: Boolean,
        required: false,
        default: false
    }
});

module.exports = SettingSchema;