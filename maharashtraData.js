const mongoose = require("mongoose");

const Location = require("../models/Location");

const MONGO_URI =
    process.env.MONGO_URI ||
    "mongodb://127.0.0.1:27017/travelgrid";


const districts = [
    "Ahmednagar",
    "Akola",
    "Amravati",
    "Aurangabad",
    "Beed",
    "Bhandara",
    "Buldhana",
    "Chandrapur",
    "Dhule",
    "Gadchiroli",
    "Gondia",
    "Hingoli",
    "Jalgaon",
    "Jalna",
    "Kolhapur",
    "Latur",
    "Mumbai City",
    "Mumbai Suburban",
    "Nagpur",
    "Nanded",
    "Nandurbar",
    "Nashik",
    "Osmanabad",
    "Palghar",
    "Parbhani",
    "Pune",
    "Raigad",
    "Ratnagiri",
    "Sangli",
    "Satara",
    "Sindhudurg",
    "Solapur",
    "Thane",
    "Wardha",
    "Washim",
    "Yavatmal"
];


const touristPlaces = [

    // MUMBAI
    {
        name: "Gateway of India",
        type: "historical",
        district: "Mumbai City",
        isTouristPlace: true
    },
    {
        name: "Marine Drive",
        type: "tourist_place",
        district: "Mumbai City",
        isTouristPlace: true
    },
    {
        name: "Chhatrapati Shivaji Maharaj Terminus",
        type: "historical",
        district: "Mumbai City",
        isTouristPlace: true
    },
    {
        name: "Siddhivinayak Temple",
        type: "temple",
        district: "Mumbai City",
        isTouristPlace: true
    },
    {
        name: "Elephanta Caves",
        type: "cave",
        district: "Mumbai City",
        isTouristPlace: true
    },
    {
        name: "Sanjay Gandhi National Park",
        type: "wildlife",
        district: "Mumbai Suburban",
        isTouristPlace: true
    },

    // PUNE
    {
        name: "Shaniwar Wada",
        type: "historical",
        district: "Pune",
        isTouristPlace: true
    },
    {
        name: "Sinhagad Fort",
        type: "fort",
        district: "Pune",
        isTouristPlace: true
    },
    {
        name: "Aga Khan Palace",
        type: "historical",
        district: "Pune",
        isTouristPlace: true
    },
    {
        name: "Dagdusheth Halwai Ganpati",
        type: "temple",
        district: "Pune",
        isTouristPlace: true
    },
    {
        name: "Lonavala",
        type: "hill_station",
        district: "Pune",
        isTouristPlace: true
    },
    {
        name: "Khandala",
        type: "hill_station",
        district: "Pune",
        isTouristPlace: true
    },
    {
        name: "Lohagad Fort",
        type: "fort",
        district: "Pune",
        isTouristPlace: true
    },
    {
        name: "Rajgad Fort",
        type: "fort",
        district: "Pune",
        isTouristPlace: true
    },
    {
        name: "Torna Fort",
        type: "fort",
        district: "Pune",
        isTouristPlace: true
    },

    // RAIGAD
    {
        name: "Raigad Fort",
        type: "fort",
        district: "Raigad",
        isTouristPlace: true
    },
    {
        name: "Murud-Janjira Fort",
        type: "fort",
        district: "Raigad",
        isTouristPlace: true
    },
    {
        name: "Alibaug Beach",
        type: "beach",
        district: "Raigad",
        isTouristPlace: true
    },
    {
        name: "Kashid Beach",
        type: "beach",
        district: "Raigad",
        isTouristPlace: true
    },
    {
        name: "Karnala Fort",
        type: "fort",
        district: "Raigad",
        isTouristPlace: true
    },

    // RATNAGIRI
    {
        name: "Ganpatipule",
        type: "temple",
        district: "Ratnagiri",
        isTouristPlace: true
    },
    {
        name: "Ganpatipule Beach",
        type: "beach",
        district: "Ratnagiri",
        isTouristPlace: true
    },
    {
        name: "Ratnadurg Fort",
        type: "fort",
        district: "Ratnagiri",
        isTouristPlace: true
    },
    {
        name: "Harihareshwar",
        type: "temple",
        district: "Ratnagiri",
        isTouristPlace: true
    },

    // SINDHUDURG
    {
        name: "Sindhudurg Fort",
        type: "fort",
        district: "Sindhudurg",
        isTouristPlace: true
    },
    {
        name: "Tarkarli Beach",
        type: "beach",
        district: "Sindhudurg",
        isTouristPlace: true
    },
    {
        name: "Malvan",
        type: "tourist_place",
        district: "Sindhudurg",
        isTouristPlace: true
    },
    {
        name: "Devbag Beach",
        type: "beach",
        district: "Sindhudurg",
        isTouristPlace: true
    },
    {
        name: "Vijaydurg Fort",
        type: "fort",
        district: "Sindhudurg",
        isTouristPlace: true
    },

    // SATARA
    {
        name: "Mahabaleshwar",
        type: "hill_station",
        district: "Satara",
        isTouristPlace: true
    },
    {
        name: "Panchgani",
        type: "hill_station",
        district: "Satara",
        isTouristPlace: true
    },
    {
        name: "Thoseghar Waterfalls",
        type: "waterfall",
        district: "Satara",
        isTouristPlace: true
    },
    {
        name: "Vajrai Waterfall",
        type: "waterfall",
        district: "Satara",
        isTouristPlace: true
    },
    {
        name: "Pratapgad Fort",
        type: "fort",
        district: "Satara",
        isTouristPlace: true
    },

    // NASHIK
    {
        name: "Trimbakeshwar Temple",
        type: "temple",
        district: "Nashik",
        isTouristPlace: true
    },
    {
        name: "Saptashrungi Temple",
        type: "temple",
        district: "Nashik",
        isTouristPlace: true
    },
    {
        name: "Pandavleni Caves",
        type: "cave",
        district: "Nashik",
        isTouristPlace: true
    },
    {
        name: "Anjaneri",
        type: "trek",
        district: "Nashik",
        isTouristPlace: true
    },

    // AHMEDNAGAR / AHILYANAGAR
    {
        name: "Shirdi Sai Baba Temple",
        type: "temple",
        district: "Ahmednagar",
        isTouristPlace: true
    },
    {
        name: "Bhandardara",
        type: "hill_station",
        district: "Ahmednagar",
        isTouristPlace: true
    },
    {
        name: "Kalsubai Peak",
        type: "trek",
        district: "Ahmednagar",
        isTouristPlace: true
    },

    // CHHATRAPATI SAMBHAJINAGAR
    {
        name: "Ajanta Caves",
        type: "cave",
        district: "Aurangabad",
        isTouristPlace: true
    },
    {
        name: "Ellora Caves",
        type: "cave",
        district: "Aurangabad",
        isTouristPlace: true
    },
    {
        name: "Grishneshwar Temple",
        type: "temple",
        district: "Aurangabad",
        isTouristPlace: true
    },
    {
        name: "Bibi Ka Maqbara",
        type: "historical",
        district: "Aurangabad",
        isTouristPlace: true
    },
    {
        name: "Daulatabad Fort",
        type: "fort",
        district: "Aurangabad",
        isTouristPlace: true
    },

    // KOLHAPUR
    {
        name: "Mahalakshmi Temple Kolhapur",
        type: "temple",
        district: "Kolhapur",
        isTouristPlace: true
    },
    {
        name: "Panhala Fort",
        type: "fort",
        district: "Kolhapur",
        isTouristPlace: true
    },
    {
        name: "Rankala Lake",
        type: "lake",
        district: "Kolhapur",
        isTouristPlace: true
    },

    // SOLAPUR
    {
        name: "Akkalkot Swami Samarth Temple",
        type: "temple",
        district: "Solapur",
        isTouristPlace: true
    },
    {
        name: "Siddheshwar Temple",
        type: "temple",
        district: "Solapur",
        isTouristPlace: true
    },

    // AMRAVATI
    {
        name: "Chikhaldara",
        type: "hill_station",
        district: "Amravati",
        isTouristPlace: true
    },
    {
        name: "Melghat Tiger Reserve",
        type: "wildlife",
        district: "Amravati",
        isTouristPlace: true
    },

    // NAGPUR
    {
        name: "Deekshabhoomi",
        type: "historical",
        district: "Nagpur",
        isTouristPlace: true
    },
    {
        name: "Futala Lake",
        type: "lake",
        district: "Nagpur",
        isTouristPlace: true
    },

    // CHANDRAPUR
    {
        name: "Tadoba-Andhari Tiger Reserve",
        type: "wildlife",
        district: "Chandrapur",
        isTouristPlace: true
    },

    // GONDIA
    {
        name: "Navegaon National Park",
        type: "wildlife",
        district: "Gondia",
        isTouristPlace: true
    },

    // DHULE
    {
        name: "Songir Fort",
        type: "fort",
        district: "Dhule",
        isTouristPlace: true
    },

    // PALGHAR
    {
        name: "Jawhar",
        type: "hill_station",
        district: "Palghar",
        isTouristPlace: true
    },
    {
        name: "Dahanu Beach",
        type: "beach",
        district: "Palghar",
        isTouristPlace: true
    },

    // NANDURBAR
    {
        name: "Toranmal",
        type: "hill_station",
        district: "Nandurbar",
        isTouristPlace: true
    }
];


async function seedDatabase() {

    try {

        await mongoose.connect(MONGO_URI);

        console.log("MongoDB Connected");

        /*
        Add districts
        */

        for (const district of districts) {

            await Location.updateOne(
                {
                    name: district,
                    type: "district"
                },
                {
                    $set: {
                        name: district,
                        type: "district",
                        district: district,
                        state: "Maharashtra"
                    }
                },
                {
                    upsert: true
                }
            );

        }

        console.log("36 Maharashtra districts added");


        /*
        Add tourist places
        */

        for (const place of touristPlaces) {

            await Location.updateOne(
                {
                    name: place.name,
                    type: place.type
                },
                {
                    $set: {
                        ...place,
                        state: "Maharashtra"
                    }
                },
                {
                    upsert: true
                }
            );

        }

        console.log(
            `${touristPlaces.length} tourist places added`
        );

        console.log("Maharashtra database seeding completed");

        process.exit(0);

    } catch (error) {

        console.error("Seed Error:", error);

        process.exit(1);
    }
}


seedDatabase();