const express = require("express");

const router = express.Router();

const {
    createTrip,
    getMyTrips
} = require("../Controllers/TripController");

const verifyToken =
    require("../middleware/authMiddleware");


// ========================================
// CREATE TRIP REQUEST
// ========================================

router.post(
    "/create",
    verifyToken,
    createTrip
);


// ========================================
// GET MY TRIPS
// ========================================

router.get(
    "/my",
    verifyToken,
    getMyTrips
);


module.exports = router;