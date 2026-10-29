const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        hotelName: {
            type: String,
            required: true
        },

        city: {
            type: String,
            required: true
        },

        place: {
            type: String,
            required: true
        },

        checkIn: {
            type: Date,
            required: true
        },

        checkOut: {
            type: Date,
            required: true
        },

        guests: {
            type: Number,
            required: true
        },

        rooms: {
            type: Number,
            required: true
        },

        price: {
            type: Number,
            default: 0
        },

        bookingReference: {
            type: String,
            required: true,
            unique: true
        },

        status: {
            type: String,
            default: "CONFIRMED"
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Booking", BookingSchema);