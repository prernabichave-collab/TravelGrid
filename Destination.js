const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },

        description: {
            type: String,
            default: ""
        },

        image: {
            type: String,
            default: ""
        }
    },
    {
        _id: true
    }
);


const destinationSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },

        category: {
            type: String,
            default: "Tourist Destination"
        },

        type: {
            type: String,
            default: ""
        },

        shortDescription: {
            type: String,
            default: ""
        },

        description: {
            type: String,
            default: ""
        },

        image: {
            type: String,
            default: ""
        },

        location: {
            type: String,
            default: ""
        },

        lat: {
            type: Number
        },

        lon: {
            type: Number
        },

        bestTime: {
            type: String,
            default: ""
        },

        entryFee: {
            type: String,
            default: ""
        },

        places: [placeSchema],

        attractions: [
            {
                type: String
            }
        ]
    },
    {
        timestamps: true
    }
);


module.exports =
    mongoose.model(
        "Destination",
        destinationSchema
    );