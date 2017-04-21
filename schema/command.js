const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    permissions: {
        type: Number,
        required: false
    }
});

UserSchema.statics.register = function(OAuthName, OAuthID, callback) {
    let newUser = this({
        name: OAuthName,
        OAuthID: OAuthID,
        admin: false
    });
    // Save the user
    newUser.save(function(err) {
        if (err) return callback(null, { message: "That username already exists.", code: "username_taken" });
        return callback(newUser, null)
    });
}

module.exports = UserSchema