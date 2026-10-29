require("dotenv").config();

const mongoose = require("mongoose");
const Location = require("./models/Location");


const locations = [

    // =====================================================
    // MUMBAI
    // =====================================================

    {
        name: "Mumbai",
        type: "city",
        district: "Mumbai",
        description:
            "Mumbai is the financial and entertainment capital of Maharashtra with historic landmarks, beaches, temples and cultural attractions.",
        latitude: 19.0760,
        longitude: 72.8777,
        bestTime: "October to February",

        places: [

            {
                name: "Gateway of India",
                type: "Historical",
                description:
                    "Iconic waterfront monument overlooking the Arabian Sea.",
                image:
                    "https://commons.wikimedia.org/wiki/Special:FilePath/Gateway%20of%20India%20Mumbai%2003-2016%20img3.jpg",
                latitude: 18.9220,
                longitude: 72.8347,
                bestTime: "October to February"
            },

            {
                name: "Marine Drive",
                type: "Beach",
                description:
                    "Famous seaside promenade known as the Queen's Necklace.",
                image:
                    "https://commons.wikimedia.org/wiki/Special:FilePath/Marine%20Drive%20Mumbai%20India.jpg",
                latitude: 18.9432,
                longitude: 72.8236,
                bestTime: "October to February"
            },

            {
                name: "Siddhivinayak Temple",
                type: "Temple",
                description:
                    "Popular Lord Ganesha temple at Prabhadevi.",
                image:
                    "https://commons.wikimedia.org/wiki/Special:FilePath/Siddhivinayak%20Temple%20Mumbai.jpg",
                latitude: 19.0168,
                longitude: 72.8305,
                bestTime: "All year"
            },

            {
                name: "Chhatrapati Shivaji Maharaj Terminus",
                type: "Historical",
                description:
                    "UNESCO World Heritage railway station famous for Victorian Gothic architecture.",
                image:
                    "https://commons.wikimedia.org/wiki/Special:FilePath/Chhatrapati%20Shivaji%20Terminus%20Mumbai.jpg",
                latitude: 18.9401,
                longitude: 72.8352,
                bestTime: "October to February"
            },

            {
                name: "Elephanta Caves",
                type: "Historical",
                description:
                    "Ancient rock-cut cave complex located on Elephanta Island.",
                image:
                    "https://commons.wikimedia.org/wiki/Special:FilePath/Elephanta%20Caves%20Trimurti.jpg",
                latitude: 18.9633,
                longitude: 72.9315,
                bestTime: "October to March"
            },

            {
                name: "Haji Ali Dargah",
                type: "Religious",
                description:
                    "Famous Indo-Islamic shrine located on an islet off the Mumbai coast.",
                image:
                    "https://commons.wikimedia.org/wiki/Special:FilePath/Haji%20Ali%20Dargah%20Mumbai.jpg",
                latitude: 18.9827,
                longitude: 72.8089,
                bestTime: "October to February"
            },

            {
                name: "Juhu Beach",
                type: "Beach",
                description:
                    "Popular Mumbai beach famous for sunset and street food.",
                image:
                    "https://commons.wikimedia.org/wiki/Special:FilePath/Juhu%20Beach%20Mumbai.jpg",
                latitude: 19.0883,
                longitude: 72.8262,
                bestTime: "October to February"
            },

            {
                name: "Sanjay Gandhi National Park",
                type: "Wildlife",
                description:
                    "Large protected green area in northern Mumbai.",
                image:
                    "https://commons.wikimedia.org/wiki/Special:FilePath/Sanjay%20Gandhi%20National%20Park.jpg",
                latitude: 19.2147,
                longitude: 72.9106,
                bestTime: "October to March"
            }

        ]
    },


    // =====================================================
    // PUNE
    // =====================================================

    {
        name: "Pune",
        type: "city",
        district: "Pune",
        description:
            "Pune is known for Maratha history, forts, temples, museums and surrounding Sahyadri landscapes.",
        latitude: 18.5204,
        longitude: 73.8567,
        bestTime: "October to February",

        places: [

            {
                name: "Shaniwar Wada",
                type: "Historical",
                description:
                    "Historic Peshwa-era fortification and one of Pune's best-known landmarks.",
                image:
                    "https://commons.wikimedia.org/wiki/Special:FilePath/Shaniwarwada.jpg",
                latitude: 18.5196,
                longitude: 73.8553,
                bestTime: "October to February"
            },

            {
                name: "Sinhagad Fort",
                type: "Fort",
                description:
                    "Historic hill fort surrounded by Sahyadri landscapes.",
                image:
                    "https://commons.wikimedia.org/wiki/Special:FilePath/Sinhagad%20Fort.jpg",
                latitude: 18.3663,
                longitude: 73.7559,
                bestTime: "June to February"
            },

            {
                name: "Rajgad Fort",
                type: "Fort",
                description:
                    "Historic hill fort and former capital of the Maratha kingdom.",
                image:
                    "https://commons.wikimedia.org/wiki/Special:FilePath/Rajgad%20Fort.jpg",
                latitude: 18.2466,
                longitude: 73.6824,
                bestTime: "October to February"
            },

            {
                name: "Torna Fort",
                type: "Fort",
                description:
                    "Large historic fort in the Sahyadri mountain range.",
                image:
                    "https://commons.wikimedia.org/wiki/Special:FilePath/Torna%20Fort.jpg",
                latitude: 18.2798,
                longitude: 73.6176,
                bestTime: "October to February"
            },

            {
                name: "Aga Khan Palace",
                type: "Historical",
                description:
                    "Historic palace associated with India's freedom movement.",
                image:
                    "https://commons.wikimedia.org/wiki/Special:FilePath/Aga%20Khan%20Palace%20Pune.jpg",
                latitude: 18.5520,
                longitude: 73.9016,
                bestTime: "October to February"
            },

            {
                name: "Dagdusheth Halwai Ganpati Temple",
                type: "Temple",
                description:
                    "Famous Ganpati temple in central Pune.",
                image:
                    "https://commons.wikimedia.org/wiki/Special:FilePath/Dagdusheth%20Halwai%20Ganapati%20Temple.jpg",
                latitude: 18.5165,
                longitude: 73.8562,
                bestTime: "All year"
            },

            {
                name: "Pataleshwar Cave Temple",
                type: "Temple",
                description:
                    "Rock-cut cave temple dedicated to Lord Shiva.",
                image:
                    "https://commons.wikimedia.org/wiki/Special:FilePath/Pataleshwar%20Cave%20Temple%20Pune.jpg",
                latitude: 18.5296,
                longitude: 73.8470,
                bestTime: "All year"
            },

            {
                name: "Parvati Hill",
                type: "Hill Station",
                description:
                    "Hilltop temple complex offering views over Pune.",
                image:
                    "https://commons.wikimedia.org/wiki/Special:FilePath/Parvati%20Hill%20Pune.jpg",
                latitude: 18.5018,
                longitude: 73.8478,
                bestTime: "October to February"
            },

            {
                name: "Saras Baug",
                type: "Tourist Place",
                description:
                    "Popular green recreational area with a Ganpati temple.",
                image:
                    "https://commons.wikimedia.org/wiki/Special:FilePath/Sarasbaug%20Pune.jpg",
                latitude: 18.4954,
                longitude: 73.8519,
                bestTime: "October to February"
            },

            {
                name: "Tamhini Ghat",
                type: "Waterfall",
                description:
                    "Scenic mountain route known for greenery and monsoon waterfalls.",
                image:
                    "https://commons.wikimedia.org/wiki/Special:FilePath/Tamhini%20Ghat.jpg",
                latitude: 18.5200,
                longitude: 73.5000,
                bestTime: "June to September"
            }

        ]
    },


    // =====================================================
    // NASHIK
    // =====================================================

    {
        name: "Nashik",
        type: "city",
        district: "Nashik",
        description:
            "Nashik is an important pilgrimage, heritage, vineyard and nature destination in Maharashtra.",
        latitude: 19.9975,
        longitude: 73.7898,
        bestTime: "October to February",

        places: [

            {
                name: "Trimbakeshwar Temple",
                type: "Temple",
                description:
                    "One of Maharashtra's important Jyotirlinga temples.",
                image:
                    "https://commons.wikimedia.org/wiki/Special:FilePath/Tryambakeshvara1.jpg",
                latitude: 19.9322,
                longitude: 73.5307,
                bestTime: "October to February"
            },

            {
                name: "Saptashrungi Devi Temple",
                type: "Temple",
                description:
                    "Important Shakti pilgrimage destination in Nashik district.",
                image:
                    "https://commons.wikimedia.org/wiki/Special:FilePath/Saptashrungi%20Temple.jpg",
                latitude: 20.3869,
                longitude: 73.9042,
                bestTime: "October to February"
            },

            {
                name: "Pandavleni Caves",
                type: "Historical",
                description:
                    "Ancient Buddhist rock-cut caves near Nashik.",
                image:
                    "https://commons.wikimedia.org/wiki/Special:FilePath/Pandavleni%20Caves.jpg",
                latitude: 20.0110,
                longitude: 73.7970,
                bestTime: "October to February"
            },

            {
                name: "Anjaneri Hills",
                type: "Hill Station",
                description:
                    "Scenic hill region associated with the Ramayana tradition.",
                image:
                    "https://commons.wikimedia.org/wiki/Special:FilePath/Anjaneri%20Hills.jpg",
                latitude: 20.0500,
                longitude: 73.5500,
                bestTime: "October to February"
            },

            {
                name: "Sula Vineyards",
                type: "Tourist Place",
                description:
                    "Popular vineyard destination near Nashik.",
                image:
                    "https://commons.wikimedia.org/wiki/Special:FilePath/Sula%20Vineyards.jpg",
                latitude: 20.0060,
                longitude: 73.6870,
                bestTime: "October to February"
            },

            {
                name: "Ram Kund",
                type: "Religious",
                description:
                    "Important religious site on the Godavari River in Panchavati.",
                image:
                    "https://commons.wikimedia.org/wiki/Special:FilePath/Ram%20Kund%20Nashik.jpg",
                latitude: 20.0059,
                longitude: 73.7897,
                bestTime: "All year"
            },

            {
                name: "Kalaram Temple",
                type: "Temple",
                description:
                    "Historic temple in Panchavati.",
                image:
                    "https://commons.wikimedia.org/wiki/Special:FilePath/Kalaram%20Temple%20Nashik.jpg",
                latitude: 20.0086,
                longitude: 73.7905,
                bestTime: "All year"
            },

            {
                name: "Dudhsagar Waterfall",
                type: "Waterfall",
                description:
                    "Seasonal waterfall and popular monsoon attraction.",
                image:
                    "https://commons.wikimedia.org/wiki/Special:FilePath/Dudhsagar%20Nashik.jpg",
                latitude: 20.0000,
                longitude: 73.7800,
                bestTime: "June to September"
            }

        ]
    },


    // =====================================================
    // NAGPUR
    // =====================================================

    {
        name: "Nagpur",
        type: "city",
        district: "Nagpur",
        description:
            "Nagpur is a major city in Vidarbha known for heritage, lakes, temples and nearby wildlife destinations.",
        latitude: 21.1458,
        longitude: 79.0882,
        bestTime: "October to February",

        places: [

            {
                name: "Deekshabhoomi",
                type: "Historical",
                description:
                    "Important Buddhist heritage and pilgrimage site.",
                image:
                    "https://commons.wikimedia.org/wiki/Special:FilePath/Deekshabhoomi%20Nagpur.jpg",
                latitude: 21.1256,
                longitude: 79.0694,
                bestTime: "October to February"
            },

            {
                name: "Sitabuldi Fort",
                type: "Fort",
                description:
                    "Historic fort located in central Nagpur.",
                image:
                    "https://commons.wikimedia.org/wiki/Special:FilePath/Sitabuldi%20Fort.jpg",
                latitude: 21.1458,
                longitude: 79.0820,
                bestTime: "October to February"
            },

            {
                name: "Ambazari Lake",
                type: "Lake",
                description:
                    "Popular lake and recreational destination.",
                image:
                    "https://commons.wikimedia.org/wiki/Special:FilePath/Ambazari%20Lake.jpg",
                latitude: 21.1289,
                longitude: 79.0510,
                bestTime: "October to February"
            },

            {
                name: "Futala Lake",
                type: "Lake",
                description:
                    "Popular evening and leisure destination in Nagpur.",
                image:
                    "https://commons.wikimedia.org/wiki/Special:FilePath/Futala%20Lake.jpg",
                latitude: 21.1570,
                longitude: 79.0420,
                bestTime: "October to February"
            },

            {
                name: "Dragon Palace Temple",
                type: "Temple",
                description:
                    "Buddhist temple complex at Kamptee near Nagpur.",
                image:
                    "https://commons.wikimedia.org/wiki/Special:FilePath/Dragon%20Palace%20Temple.jpg",
                latitude: 21.2150,
                longitude: 79.1900,
                bestTime: "October to February"
            },

            {
                name: "Pench National Park",
                type: "Wildlife",
                description:
                    "Wildlife destination near Nagpur known for tiger habitat.",
                image:
                    "https://commons.wikimedia.org/wiki/Special:FilePath/Pench%20National%20Park.jpg",
                latitude: 21.6500,
                longitude: 79.3000,
                bestTime: "October to May"
            }

        ]
    },


    // =====================================================
    // KOLHAPUR
    // =====================================================

    {
        name: "Kolhapur",
        type: "city",
        district: "Kolhapur",
        description:
            "Kolhapur is known for temples, forts, lakes, palaces and western Maharashtra heritage.",
        latitude: 16.7050,
        longitude: 74.2433,
        bestTime: "October to March",

        places: [

            {
                name: "Mahalakshmi Temple",
                type: "Temple",
                description:
                    "Historic pilgrimage temple dedicated to Goddess Mahalakshmi.",
                image:
                    "https://commons.wikimedia.org/wiki/Special:FilePath/Mahalakshmi%20Temple%20Kolhapur.jpg",
                latitude: 16.6990,
                longitude: 74.2317,
                bestTime: "October to March"
            },

            {
                name: "Panhala Fort",
                type: "Fort",
                description:
                    "Historic hill fort near Kolhapur.",
                image:
                    "https://commons.wikimedia.org/wiki/Special:FilePath/Panhala%20Fort.jpg",
                latitude: 16.8118,
                longitude: 74.1118,
                bestTime: "October to March"
            },

            {
                name: "Jyotiba Temple",
                type: "Temple",
                description:
                    "Hilltop temple complex near Kolhapur.",
                image:
                    "https://commons.wikimedia.org/wiki/Special:FilePath/Jyotiba%20Temple.jpg",
                latitude: 16.8000,
                longitude: 74.0000,
                bestTime: "October to March"
            },

            {
                name: "Rankala Lake",
                type: "Lake",
                description:
                    "Popular lake and evening recreation area.",
                image:
                    "https://commons.wikimedia.org/wiki/Special:FilePath/Rankala%20Lake.jpg",
                latitude: 16.6910,
                longitude: 74.2180,
                bestTime: "October to March"
            },

            {
                name: "New Palace",
                type: "Historical",
                description:
                    "Historic palace and museum associated with Kolhapur's royal heritage.",
                image:
                    "https://commons.wikimedia.org/wiki/Special:FilePath/New%20Palace%20Kolhapur.jpg",
                latitude: 16.7080,
                longitude: 74.2450,
                bestTime: "October to March"
            },

            {
                name: "Radhanagari Wildlife Sanctuary",
                type: "Wildlife",
                description:
                    "Forest and wildlife destination in Kolhapur district.",
                image:
                    "https://commons.wikimedia.org/wiki/Special:FilePath/Radhanagari%20Wildlife%20Sanctuary.jpg",
                latitude: 16.4000,
                longitude: 73.9500,
                bestTime: "October to May"
            }

        ]
    },


    // =====================================================
    // LONAVALA
    // =====================================================

    {
        name: "Lonavala",
        type: "hill_station",
        district: "Pune",
        description:
            "Popular Sahyadri hill station known for valleys, forts, caves and waterfalls.",
        latitude: 18.7546,
        longitude: 73.4062,
        bestTime: "June to February",

        places: [

            {
                name: "Lohagad Fort",
                type: "Fort",
                description:
                    "Historic hill fort near Lonavala.",
                image:
                    "https://commons.wikimedia.org/wiki/Special:FilePath/Lohagad%20Fort.jpg",
                latitude: 18.7100,
                longitude: 73.4800,
                bestTime: "June to February"
            },

            {
                name: "Bhaja Caves",
                type: "Historical",
                description:
                    "Ancient Buddhist rock-cut caves.",
                image:
                    "https://commons.wikimedia.org/wiki/Special:FilePath/Bhaja%20Caves.jpg",
                latitude: 18.7180,
                longitude: 73.4750,
                bestTime: "June to February"
            },

            {
                name: "Karla Caves",
                type: "Historical",
                description:
                    "Ancient Buddhist rock-cut cave complex.",
                image:
                    "https://commons.wikimedia.org/wiki/Special:FilePath/Karla%20Caves.jpg",
                latitude: 18.7790,
                longitude: 73.4730,
                bestTime: "October to February"
            },

            {
                name: "Bhushi Dam",
                type: "Waterfall",
                description:
                    "Popular monsoon attraction near Lonavala.",
                image:
                    "https://commons.wikimedia.org/wiki/Special:FilePath/Bhushi%20Dam.jpg",
                latitude: 18.7130,
                longitude: 73.4050,
                bestTime: "June to September"
            },

            {
                name: "Tiger Point",
                type: "Hill Station",
                description:
                    "Scenic viewpoint overlooking the Sahyadri valleys.",
                image:
                    "https://commons.wikimedia.org/wiki/Special:FilePath/Tiger%20Point%20Lonavala.jpg",
                latitude: 18.7350,
                longitude: 73.3800,
                bestTime: "June to February"
            }

        ]
    },


    // =====================================================
    // MAHABALESHWAR
    // =====================================================

    {
        name: "Mahabaleshwar",
        type: "hill_station",
        district: "Satara",
        description:
            "Popular hill station known for viewpoints, valleys, waterfalls, temples and strawberry farms.",
        latitude: 17.9307,
        longitude: 73.6477,
        bestTime: "October to May",

        places: [

            {
                name: "Venna Lake",
                type: "Lake",
                description:
                    "Popular boating and leisure destination.",
                image:
                    "https://commons.wikimedia.org/wiki/Special:FilePath/Venna%20Lake.jpg",
                latitude: 17.9300,
                longitude: 73.6600,
                bestTime: "October to May"
            },

            {
                name: "Pratapgad Fort",
                type: "Fort",
                description:
                    "Historic mountain fort near Mahabaleshwar.",
                image:
                    "https://commons.wikimedia.org/wiki/Special:FilePath/Pratapgad%20Fort.jpg",
                latitude: 17.9360,
                longitude: 73.5780,
                bestTime: "October to May"
            },

            {
                name: "Mapro Garden",
                type: "Tourist Place",
                description:
                    "Popular strawberry and food destination.",
                image:
                    "https://commons.wikimedia.org/wiki/Special:FilePath/Mapro%20Garden.jpg",
                latitude: 17.9230,
                longitude: 73.7200,
                bestTime: "December to May"
            },

            {
                name: "Lingmala Waterfall",
                type: "Waterfall",
                description:
                    "Scenic waterfall popular during and after monsoon.",
                image:
                    "https://commons.wikimedia.org/wiki/Special:FilePath/Lingmala%20Waterfall.jpg",
                latitude: 17.9000,
                longitude: 73.6800,
                bestTime: "July to October"
            },

            {
                name: "Arthur's Seat",
                type: "Viewpoint",
                description:
                    "Famous viewpoint overlooking deep valleys.",
                image:
                    "https://commons.wikimedia.org/wiki/Special:FilePath/Arthur%27s%20Seat%20Mahabaleshwar.jpg",
                latitude: 17.9150,
                longitude: 73.5750,
                bestTime: "October to May"
            }

        ]
    },


    // =====================================================
    // ALIBAUG
    // =====================================================

    {
        name: "Alibaug",
        type: "beach",
        district: "Raigad",
        description:
            "Popular Konkan coastal destination known for beaches, forts and sea views.",
        latitude: 18.6414,
        longitude: 72.8722,
        bestTime: "October to March",

        places: [

            {
                name: "Alibaug Beach",
                type: "Beach",
                description:
                    "Popular coastal destination near Alibaug town.",
                image:
                    "https://commons.wikimedia.org/wiki/Special:FilePath/Alibag%20Beach.jpg",
                latitude: 18.6330,
                longitude: 72.8730,
                bestTime: "October to March"
            },

            {
                name: "Kolaba Fort",
                type: "Fort",
                description:
                    "Historic sea fort located near Alibaug beach.",
                image:
                    "https://commons.wikimedia.org/wiki/Special:FilePath/Kolaba%20Fort.jpg",
                latitude: 18.6380,
                longitude: 72.8670,
                bestTime: "October to March"
            },

            {
                name: "Kihim Beach",
                type: "Beach",
                description:
                    "Peaceful coastal destination surrounded by greenery.",
                image:
                    "https://commons.wikimedia.org/wiki/Special:FilePath/Kihim%20Beach.jpg",
                latitude: 18.7000,
                longitude: 72.8750,
                bestTime: "October to March"
            },

            {
                name: "Kashid Beach",
                type: "Beach",
                description:
                    "Popular Konkan beach destination.",
                image:
                    "https://commons.wikimedia.org/wiki/Special:FilePath/Kashid%20Beach.jpg",
                latitude: 18.5550,
                longitude: 72.9250,
                bestTime: "October to March"
            }

        ]
    }

];


async function seedDatabase() {

    try {

        await mongoose.connect(
            process.env.MONGO_URI
        );

        console.log("MongoDB Connected");


        for (const locationData of locations) {

            await Location.findOneAndUpdate(

                {
                    name: locationData.name
                },

                locationData,

                {
                    upsert: true,
                    new: true,
                    setDefaultsOnInsert: true
                }

            );

            console.log(
                "Updated:",
                locationData.name
            );
        }


        console.log(
            "\n✅ Tourist locations seeded successfully!"
        );

        console.log(
            "Total locations:",
            locations.length
        );


        await mongoose.disconnect();

    }

    catch (error) {

        console.error(
            "❌ Seed Error:",
            error
        );

        process.exit(1);
    }
}


seedDatabase();