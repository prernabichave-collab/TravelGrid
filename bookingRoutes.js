const express = require("express");

const router = express.Router();

const {
    createBooking,
    getMyBookings
} = require("../controllers/bookingController");

const verifyToken =
    require("../middleware/authMiddleware");


router.post("/create", verifyToken, createBooking);

router.get("/my", verifyToken, getMyBookings);


module.exports = router;