const express = require("express");

const router = express.Router();

router.post("/route", async (req, res) => {

    try {

        const {
            fromLat,
            fromLon,
            toLat,
            toLon
        } = req.body;

        if (
            fromLat === undefined ||
            fromLon === undefined ||
            toLat === undefined ||
            toLon === undefined
        ) {

            return res.status(400).json({
                message: "Coordinates are required"
            });
        }


        const osrmURL =
            `https://router.project-osrm.org/route/v1/driving/` +
            `${fromLon},${fromLat};${toLon},${toLat}` +
            `?overview=full&geometries=geojson`;


        const response =
            await fetch(osrmURL);


        if (!response.ok) {

            throw new Error(
                "OSRM API request failed"
            );
        }


        const data =
            await response.json();


        // -----------------------------------------
        // RETURN OSRM RESULT
        // -----------------------------------------

        return res.json(data);


    } catch (error) {

        console.error(
            "OSRM ERROR:",
            error.message
        );


        return res.status(500).json({

            message:
                "Unable to calculate route",

            error:
                error.message

        });
    }

});


module.exports = router;