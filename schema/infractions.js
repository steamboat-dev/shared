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
    expireTime: {
        type: Date,
        required: false
    },
    time: {
        type: Date(),
        required: true
    },
    active: {
        type: Boolean,
        default: true
    }
});

InfractionSchema.statics.create = function(moderator, target, type, reason, callback) {
    if (!this.isValidType(type)) return callback(null, "Invalid type");
    let newInfraction = this({
        moderatorID: moderator,
        targetID: target,
        type: type,
        reason: reason,
        time: new Date()
    });

    newInfraction.save(err => {
        if (err) return callback(null, "An unknown error occured whilst setting up that guild");
        return callback(newInfraction, null);
    });
}

InfractionSchema.statics.isValidType = function(type) {
    if (type === "ban") return true;
    if (type === "kick") return true;
    if (type === "mute") return true;
    return false;
}

module.exports = InfractionSchema;
