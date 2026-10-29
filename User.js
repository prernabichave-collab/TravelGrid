const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    mobile: {
        type: String,
        required: true,
        trim: true
    },

    password: {
        type: String,
        required: true
    },

    resetOTP: {
        type: String
    },

    resetOTPExpiry: {
        type: Date
    }
});

module.exports = mongoose.model("User", userSchema);