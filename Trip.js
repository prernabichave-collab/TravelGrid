const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        from: {
            type: String,
            required: true,
            trim: true
        },

        destination: {
            type: String,
            required: true,
            trim: true
        },

        travelMode: {
            type: String,
            required: true,
            trim: true
        },

        travelDate: {
            type: String,
            required: true
        },

        returnDate: {
            type: String,
            required: true
        },

        passengers: {
            type: Number,
            required: true,
            min: 1
        },

        tripType: {
            type: String,
            default: "Family"
        },

        hotelRequired: {
            type: String,
            default: "No"
        },

        rooms: {
            type: Number,
            default: 1
        },

        mobile: {
            type: String,
            required: true,
            trim: true
        },

        places: {
            type: [String],
            default: []
        },

        status: {
            type: String,
            enum: [
                "Pending",
                "Confirmed",
                "Rejected",
                "Completed"
            ],
            default: "Pending"
        },

        bookingReference: {
            type: String,
            unique: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Trip", tripSchema);