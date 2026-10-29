const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        type: {
            type: String,
            required: true,
            trim: true
        },

        description: {
            type: String,
            default: ""
        },

        image: {
            type: String,
            default: ""
        },

        latitude: {
            type: Number,
            default: null
        },

        longitude: {
            type: Number,
            default: null
        },

        bestTime: {
            type: String,
            default: ""
        },

        entryFee: {
            type: String,
            default: "Check locally"
        }
    },
    {
        _id: true
    }
);


const locationSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },

        type: {
            type: String,
            required: true,
            trim: true
        },

        district: {
            type: String,
            default: "",
            trim: true
        },

        taluka: {
            type: String,
            default: "",
            trim: true
        },

        description: {
            type: String,
            default: ""
        },

        image: {
            type: String,
            default: ""
        },

        latitude: {
            type: Number,
            default: null
        },

        longitude: {
            type: Number,
            default: null
        },

        bestTime: {
            type: String,
            default: ""
        },

        entryFee: {
            type: String,
            default: ""
        },

        places: {
            type: [placeSchema],
            default: []
        }
    },
    {
        timestamps: true
    }
);


module.exports =
    mongoose.model("Location", locationSchema);