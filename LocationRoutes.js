const express = require("express");
const router = express.Router();

const Location = require("../models/Location");

// GET all Maharashtra locations
router.get("/", async (req, res) => {
    try {
        const { search, type, district } = req.query;

        let query = {};

        if (search && search.trim() !== "") {
            query.name = {
                $regex: search.trim(),
                $options: "i"
            };
        }

        if (type && type !== "all") {
            query.type = type;
        }

        if (district && district.trim() !== "") {
            query.district = {
                $regex: district.trim(),
                $options: "i"
            };
        }

        const locations = await Location.find(query)
            .sort({ name: 1 })
            .limit(5000);

        res.json({
            success: true,
            count: locations.length,
            locations
        });

    } catch (error) {
        console.error("Location API Error:", error);

        res.status(500).json({
            success: false,
            message: "Unable to load Maharashtra locations",
            error: error.message
        });
    }
});


// GET single location
router.get("/:id", async (req, res) => {
    try {
        const location = await Location.findById(req.params.id);

        if (!location) {
            return res.status(404).json({
                success: false,
                message: "Location not found"
            });
        }

        res.json({
            success: true,
            location
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Unable to load location",
            error: error.message
        });
    }
});


module.exports = router;