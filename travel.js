/* =========================================================
   TRAVELGRID - TRAVEL.JS
========================================================= */

const token = localStorage.getItem("token");

if (!token) {
    window.location.href = "login.html";
}


/* =========================================================
   GLOBAL VARIABLES
========================================================= */

let currentDestination = null;
let selectedPlaces = [];
let currentTravelMode = "car";
let selectedTravelOption = null;

let map = null;
let routeLayer = null;


/* =========================================================
   DESTINATION DATA
========================================================= */

const destinations = {

    "Mumbai": [
        "Gateway of India",
        "Marine Drive",
        "Siddhivinayak Temple",
        "Elephanta Caves",
        "CSMT",
        "Juhu Beach",
        "Haji Ali Dargah",
        "Sanjay Gandhi National Park",
        "Kanheri Caves",
        "Bandra-Worli Sea Link",
        "Bandra Fort",
        "CSMVS",
        "Mahalakshmi Temple",
        "Girgaon Chowpatty",
        "Nehru Planetarium",
        "Dr. Bhau Daji Lad Museum"
    ],

    "Pune": [
        "Shaniwar Wada",
        "Aga Khan Palace",
        "Sinhagad Fort",
        "Dagdusheth Halwai Ganpati",
        "Parvati Hill",
        "Pataleshwar Cave Temple",
        "Raja Dinkar Kelkar Museum",
        "Lal Mahal",
        "Shinde Chhatri",
        "Khadakwasla Dam",
        "Pashan Lake",
        "Vetal Tekdi",
        "Bund Garden",
        "Empress Garden",
        "NDA View Area",
        "Sinhagad Valley",
        "jejuri temple "
    ],

    "Nashik": [
        "Trimbakeshwar Temple",
        "Panchavati",
        "Kalaram Temple",
        "Sita Gufa",
        "Ram Kund",
        "Pandavleni Caves",
        "Anjaneri Hills",
        "Muktidham Temple",
        "Sula Vineyards",
        "Gangapur Dam",
        "Coin Museum",
        "Someshwar Waterfall",
        "Dudhsagar Waterfall",
        "Saptashrungi Temple",
        "Godavari Ghat"
    ],

    "Lonavala": [
        "Tiger Point",
        "Bhushi Dam",
        "Rajmachi Fort",
        "Karla Caves",
        "Bhaja Caves",
        "Lohagad Fort",
        "Sunil's Celebrity Wax Museum",
        "Ryewood Park",
        "Kune Waterfalls",
        "Pawna Lake"
    ],

    "Mahabaleshwar": [
        "Venna Lake",
        "Arthur's Seat",
        "Mapro Garden",
        "Pratapgad Fort",
        "Elephant's Head Point",
        "Wilson Point",
        "Lingmala Waterfall",
        "Krishnabai Temple",
        "Panch Ganga Temple"
    ],

    "Matheran": [
        "Echo Point",
        "Louisa Point",
        "Panorama Point",
        "Charlotte Lake",
        "Monkey Point",
        "One Tree Hill"
    ],

    "Alibaug": [
        "Alibaug Beach",
        "Kolaba Fort",
        "Kashid Beach",
        "Nagaon Beach",
        "Korlai Fort",
        "Varsoli Beach",
        "Kanakeshwar Temple"
    ],

    "Ratnagiri": [
        "Ratnadurg Fort",
        "Ganpatipule",
        "Thibaw Palace",
        "Bhatye Beach",
        "Jaigad Fort",
        "Lokmanya Tilak Birthplace",
        "Pawas"
    ],

    "Ganpatipule": [
        "Ganpatipule Temple",
        "Ganpatipule Beach",
        "Jaigad Fort",
        "Aare Ware Beach",
        "Malgund"
    ],

    "Kolhapur": [
        "Mahalakshmi Temple",
        "Panhala Fort",
        "Rankala Lake",
        "New Palace",
        "Jyotiba Temple",
        "Kopeshwar Temple",
        "Kaneri Math"
    ],

    "Satara": [
        "Kaas Plateau",
        "Thoseghar Waterfall",
        "Ajinkyatara Fort",
        "Sajjangad",
        "Pratapgad",
        "Chalkewadi"
    ],

    "Shirdi": [
        "Sai Baba Temple",
        "Dwarkamai",
        "Chavadi",
        "Khandoba Temple",
        "Shani Shingnapur"
    ],

    "Chhatrapati Sambhajinagar": [
        "Bibi Ka Maqbara",
        "Ellora Caves",
        "Ajanta Caves",
        "Daulatabad Fort",
        "Panchakki"
    ],

    "Nagpur": [
        "Deekshabhoomi",
        "Sitabardi Fort",
        "Futala Lake",
        "Seminary Hill",
        "Ambazari Lake"
    ],

    "Amravati": [
        "Ambadevi Temple",
        "Chikhaldara",
        "Melghat",
        "Gawilgadh Fort"
    ],

    "Nanded": [
        "Hazur Sahib",
        "Kandhar Fort",
        "Sahastrakund Waterfall",
        "Unkeshwar"
    ],

    "Solapur": [
        "Siddheshwar Temple",
        "Akkalkot",
        "Great Indian Bustard Sanctuary",
        "Hipparga Lake",
        "Bhuikot Fort"
    ],

    "Thane": [
        "Upvan Lake",
        "Yeoor Hills",
        "Talao Pali",
        "Kopineshwar Temple",
        "Kelva Beach",
        "Tikuji-ni-Wadi"
    ],

    "Navi Mumbai": [
        "Kharghar Hills",
        "Belapur Fort",
        "Central Park",
        "Nerul Balaji Temple",
        "Pandavkada Waterfall",
        "Airoli Flamingo Sanctuary",
        "Palm Beach Road",
        "Jewel of Navi Mumbai",
        "Parsik Hills"
    ],

    "Bhiwandi": [
        "Kalyan Durgadi Fort",
        "Kopineshwar Temple",
        "Kalyan Creek",
        "Ganeshpuri",
        "Vajreshwari Temple"
    ],

    "Kalyan": [
        "Durgadi Fort",
        "Kopineshwar Temple",
        "Kala Talao",
        "Kalyan Creek",
        "Titwala Ganesh Mandir"
    ],

    "Malvan": [
        "Sindhudurg Fort",
        "Malvan Beach",
        "Tarkarli Beach",
        "Devbag Beach",
        "Rock Garden"
    ],

    "Sindhudurg": [
        "Sindhudurg Fort",
        "Tarkarli",
        "Vijaydurg Fort",
        "Devbag",
        "Bhogwe Beach"
    ],

    "Sawantwadi": [
        "Sawantwadi Palace",
        "Moti Talao",
        "Amboli Ghat",
        "Hiranyakeshi Temple"
    ],

    "Harihareshwar": [
        "Harihareshwar Temple",
        "Harihareshwar Beach",
        "Kalbhairav Temple",
        "Shrivardhan Beach",
        "Diveagar Beach"
    ],

    "Bhandardara": [
        "Arthur Lake",
        "Randha Falls",
        "Wilson Dam",
        "Kalsubai Peak",
        "Amruteshwar Temple",
        "Sandhan Valley"
    ],

    "Igatpuri": [
        "Bhatsa River Valley",
        "Tringalwadi Fort",
        "Vipassana Centre",
        "Kalsubai",
        "Vihigaon Waterfall"
    ],

    "Malshej Ghat": [
        "Malshej Ghat",
        "Harishchandragad",
        "Pimpalgaon Joga Dam",
        "Malshej Waterfalls",
        "Ajoba Hills"
    ],

    "Tamhini Ghat": [
        "Tamhini Waterfalls",
        "Mulshi Lake",
        "Devkund Waterfall",
        "Plus Valley",
        "Mulshi Dam"
    ],

    "Dapoli": [
        "Murud Beach",
        "Karde Beach",
        "Suvarnadurg Fort"
    ],

    "Guhagar": [
        "Guhagar Beach",
        "Vyadeshwar Temple",
        "Hedvi Beach"
    ],

    "Chiplun": [
        "Parshuram Temple",
        "Vashishti River",
        "Gowalkot Fort",
        "Koyna Dam",
        "Sawatsada Waterfall"
    ],

    "Pandharpur": [
        "Vitthal Rukmini Temple",
        "Chandrabhaga River",
        "Pundalik Temple",
        "Gopalkrishna Temple"
    ],

    "Akkalkot": [
        "Swami Samarth Temple",
        "Vatavruksha Mandir",
        "Akkalkot Palace"
    ],

    "Tadoba": [
        "Tadoba Lake",
        "Moharli Gate",
        "Pangdi Gate"
    ],

    "Chikhaldara": [
        "Bhimkund",
        "Gavilgarh Fort",
        "Panchbol Point",
        "Devi Point"
    ],

    "Lonar": [
        "Lonar Lake",
        "Daitya Sudan Temple",
        "Gomukh Temple"
    ],

    "Shegaon": [
        "Gajanan Maharaj Temple",
        "Anand Sagar",
        "Shiv Mandir"
    ],

    "Toranmal": [
        "Yashwant Lake",
        "Sita Khai",
        "Gorakhnath Temple",
        "Lotus Lake"
    ],

    "Pench": [
        "Pench National Park",
        "Pench Reservoir",
        "Turia Gate"
    ],

    "Sinnar": [
        "Gondeshwar Temple",
        "Mhasoba Temple",
        "Gargoti Museum"
    ],

    "Sangamner": [
        "Amruteshwar Temple",
        "Bhandardara",
        "Kalsubai",
        "Malshej"
    ],

    "Raigad": [
        "Raigad Fort",
        "Takmak Tok",
        "Raigad Ropeway"
    ],

    "Sangli": [
        "Ganapati Temple",
        "Sangli Fort",
        "Krishna River"
    ],

    "Karad": [
        "Pritisangam",
        "Krishna-Koyna Sangam"
    ],

    "Bhor": [
        "Bhatghar Dam",
        "Rajgad Fort",
        "Kenjalgad"
    ],

    "Shriwardhan": [
        "Shrivardhan Beach",
        "Harihareshwar",
        "Diveagar Beach"
    ],

    "Nandurbar": [
        "Toranmal",
        "Prakasha Temple",
        "Unapdev"
    ],

    "Washim": [
        "Balaji Temple",
        "Padmatirtha",
        "Shri Narasimha Temple"
    ],

    "Yavatmal": [
        "Tipeshwar Wildlife Sanctuary",
        "Waghadi Dam"
    ],

    "Buldhana": [
        "Lonar Lake",
        "Shegaon",
        "Sindkhed Raja"
    ],

    "Gondia": [
        "Navegaon National Park",
        "Nagzira Wildlife Sanctuary"
    ],

    "Chandrapur": [
        "Tadoba",
        "Chandrapur Fort",
        "Mahakali Temple"
    ],

    "Wardha": [
        "Sevagram Ashram",
        "Magan Sangrahalaya",
        "Gitai Mandir"
    ],

    "Dahanu": [
        "Dahanu Beach",
        "Bordi Beach",
        "Bahrot Caves"
    ],

    "Palghar": [
        "Kelva Beach",
        "Shirgaon Fort",
        "Mahim Beach"
    ]

};


/* =========================================================
   RELIGIOUS DATA
========================================================= */

const religiousData = {

    ashtavinayak: {
        title: "Ashtavinayak Yatra",
        places: [
            "Moreshwar / Mayureshwar – Morgaon",
            "Siddhivinayak – Siddhatek",
            "Ballaleshwar – Pali",
            "Varadvinayak – Mahad",
            "Chintamani – Theur",
            "Girijatmak – Lenyadri",
            "Vighneshwar – Ozar",
            "Mahaganapati – Ranjangaon"
        ]
    },

    shakti: {
        title: "3½ Shakti Peethas",
        places: [
            "Mahalakshmi Temple – Kolhapur",
            "Tulja Bhavani Temple – Tuljapur",
            "Renuka Devi Temple – Mahur",
            "Saptashrungi Devi Temple – Vani"
        ]
    },

    jyotirlinga: {
        title: "Maharashtra Jyotirlinga Circuit",
        places: [
            "Trimbakeshwar – Nashik",
            "Bhimashankar – Pune",
            "Grishneshwar – Verul / Ellora",
            "Parli Vaijnath – Beed"
        ]
    }

};


/* =========================================================
   TRAVEL OPTIONS
========================================================= */

const travelOptions = {

    car: [

        {
            id: "CAR-01",
            name: "TravelGrid Swift",
            vehicleNo: "MH 04 AB 2451",
            type: "Hatchback",
            seats: 4,
            fuel: "Petrol",
            price: 2200
        },

        {
            id: "CAR-02",
            name: "TravelGrid Sedan",
            vehicleNo: "MH 04 CD 7812",
            type: "Sedan",
            seats: 5,
            fuel: "Petrol",
            price: 3000
        },

        {
            id: "CAR-03",
            name: "TravelGrid SUV",
            vehicleNo: "MH 04 EF 5639",
            type: "SUV",
            seats: 6,
            fuel: "Diesel",
            price: 4200
        }

    ],


    bus: [

        {
            id: "BUS-01",
            name: "MSRTC Shivneri",
            vehicleNo: "MH 14 BT 1021",
            type: "AC Seater",
            seats: 40,
            price: 650
        },

        {
            id: "BUS-02",
            name: "MSRTC Shivshahi",
            vehicleNo: "MH 14 BT 2088",
            type: "AC Seater",
            seats: 40,
            price: 720
        },

        {
            id: "BUS-03",
            name: "Neeta Travels",
            vehicleNo: "MH 04 TH 7788",
            type: "AC Sleeper / Seater",
            seats: 36,
            price: 850
        },

        {
            id: "BUS-04",
            name: "Purple Bus",
            vehicleNo: "MH 43 P 4567",
            type: "AC Seater",
            seats: 45,
            price: 600
        },

        {
            id: "BUS-05",
            name: "Maharashtra Travels",
            vehicleNo: "MH 12 TR 9090",
            type: "AC Sleeper",
            seats: 32,
            price: 900
        }

    ],


    train: [

        {
            id: "TR-01",
            name: "TravelGrid Express",
            vehicleNo: "TG-TR01",
            type: "Sleeper",
            seats: 72,
            price: 520
        },

        {
            id: "TR-02",
            name: "TravelGrid Express",
            vehicleNo: "TG-TR02",
            type: "3A AC",
            seats: 64,
            price: 980
        },

        {
            id: "TR-03",
            name: "Maharashtra Superfast",
            vehicleNo: "TG-TR03",
            type: "2A AC",
            seats: 48,
            price: 1450
        },

        {
            id: "TR-04",
            name: "Deccan Passenger",
            vehicleNo: "TG-TR04",
            type: "2S",
            seats: 90,
            price: 350
        }

    ],


    flight: [

        {
            id: "FL-01",
            name: "TravelGrid Air",
            vehicleNo: "TG 421",
            type: "Economy",
            seats: 180,
            price: 4800
        },

        {
            id: "FL-02",
            name: "TravelGrid Air",
            vehicleNo: "TG 618",
            type: "Economy",
            seats: 180,
            price: 5600
        },

        {
            id: "FL-03",
            name: "Maharashtra Connect",
            vehicleNo: "MC 205",
            type: "Economy",
            seats: 186,
            price: 6200
        }

    ]

};


/* =========================================================
   TRIP COST PLANS
========================================================= */

const costPlans = {

    "Mumbai": [800, 1500, "1 Day"],

    "Pune": [800, 1800, "1 Day"],

    "Nashik": [2500, 5000, "2 Days / 1 Night"],

    "Lonavala": [7000, 11000, "3 Days / 2 Nights"],

    "Mahabaleshwar": [8000, 12000, "3 Days / 2 Nights"],

    "Matheran": [3500, 7000, "2 Days / 1 Night"],

    "Alibaug": [3000, 6000, "2 Days / 1 Night"],

    "Ratnagiri": [6000, 10000, "3 Days / 2 Nights"],

    "Ganpatipule": [3500, 7000, "2 Days / 1 Night"],

    "Kolhapur": [3500, 7000, "2 Days / 1 Night"],

    "Satara": [3500, 7000, "2 Days / 1 Night"],

    "Shirdi": [7000, 11000, "3 Days / 2 Nights"],

    "Chhatrapati Sambhajinagar": [6000, 10000, "3 Days / 2 Nights"],

    "Nagpur": [6000, 10000, "3 Days / 2 Nights"],

    "Amravati": [3500, 7000, "2 Days / 1 Night"],

    "Nanded": [3500, 7000, "2 Days / 1 Night"],

    "Solapur": [3000, 6000, "2 Days / 1 Night"],

    "Thane": [500, 1500, "1 Day"],

    "Navi Mumbai": [500, 1500, "1 Day"],

    "Bhiwandi": [500, 1500, "1 Day"],

    "Kalyan": [500, 1500, "1 Day"],

    "Malvan": [6000, 10000, "3 Days / 2 Nights"],

    "Sindhudurg": [6000, 10000, "3 Days / 2 Nights"],

    "Sawantwadi": [3500, 7000, "2 Days / 1 Night"],

    "Harihareshwar": [3500, 7000, "2 Days / 1 Night"],

    "Bhandardara": [3500, 7000, "2 Days / 1 Night"],

    "Igatpuri": [3000, 6000, "2 Days / 1 Night"],

    "Malshej Ghat": [3000, 6000, "2 Days / 1 Night"],

    "Tamhini Ghat": [3000, 6000, "2 Days / 1 Night"],

    "Dapoli": [3500, 7000, "2 Days / 1 Night"],

    "Guhagar": [3500, 7000, "2 Days / 1 Night"],

    "Chiplun": [3000, 6000, "2 Days / 1 Night"],

    "Pandharpur": [3000, 6000, "2 Days / 1 Night"],

    "Akkalkot": [1800, 4000, "1 Day"],

    "Tadoba": [7000, 14000, "3 Days / 2 Nights"],

    "Chikhaldara": [3500, 7000, "2 Days / 1 Night"],

    "Lonar": [3000, 6000, "2 Days / 1 Night"],

    "Shegaon": [1800, 4000, "1 Day"],

    "Toranmal": [3500, 7000, "2 Days / 1 Night"],

    "Pench": [7000, 14000, "3 Days / 2 Nights"],

    "Sinnar": [1500, 3000, "1 Day"],

    "Sangamner": [3000, 6000, "2 Days / 1 Night"],

    "Raigad": [3500, 7000, "2 Days / 1 Night"],

    "Sangli": [3000, 6000, "2 Days / 1 Night"],

    "Karad": [1800, 3500, "1 Day"],

    "Bhor": [1800, 3500, "1 Day"],

    "Shriwardhan": [3500, 7000, "2 Days / 1 Night"],

    "Nandurbar": [3000, 6000, "2 Days / 1 Night"],

    "Washim": [1800, 3500, "1 Day"],

    "Yavatmal": [1800, 3500, "1 Day"],

    "Buldhana": [3000, 6000, "2 Days / 1 Night"],

    "Gondia": [3500, 7000, "2 Days / 1 Night"],

    "Chandrapur": [6000, 12000, "3 Days / 2 Nights"],

    "Wardha": [1800, 3500, "1 Day"],

    "Dahanu": [3000, 6000, "2 Days / 1 Night"],

    "Palghar": [1800, 3500, "1 Day"],

    "Ashtavinayak Yatra": [5500, 7000, "3 Days / 2 Nights"],

    "3½ Shakti Peethas": [7551, 9551, "5 Days / 4 Nights"],

    "Maharashtra Jyotirlinga Circuit": [9000, 15000, "4 Days / 3 Nights"]

};


/* =========================================================
   HELPERS
========================================================= */

function money(amount) {
    return "₹" + Math.round(amount).toLocaleString("en-IN");
}


function escapeHTML(value) {

    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


function getPersons() {

    return Math.max(
        1,
        Number(document.getElementById("passengers").value) || 1
    );

}


/* =========================================================
   RENDER DESTINATIONS
========================================================= */

function renderDestinations(filter = "") {

    const grid = document.getElementById("destinationGrid");

    grid.innerHTML = "";

    const query = filter.toLowerCase().trim();

    Object.keys(destinations).forEach(destination => {

        const places = destinations[destination];

        if (
            query &&
            !destination.toLowerCase().includes(query) &&
            !places.some(p => p.toLowerCase().includes(query))
        ) {
            return;
        }


        const card = document.createElement("div");

        card.className = "destination-card";


        card.innerHTML = `

            <h3>
                📍 ${escapeHTML(destination)}
            </h3>

            <p>
                Explore tourist places and select
                what you want to visit.
            </p>

            <span class="place-count">
                ${places.length} places / attractions
            </span>

            <div class="card-buttons">

                <button onclick="openDestination('${escapeHTML(destination)}')">
                    📍 View Places
                </button>

                <button
                    class="primary"
                    onclick="selectDestination('${escapeHTML(destination)}')">
                    ✓ Select
                </button>

            </div>
        `;


        grid.appendChild(card);

    });


    if (!grid.children.length) {

        grid.innerHTML = `
            <div class="empty-history">
                No destination found.
            </div>
        `;

    }

}


/* =========================================================
   SEARCH
========================================================= */

function searchDestinations() {

    const value =
        document.getElementById("destinationSearch").value;

    renderDestinations(value);

}


document
    .getElementById("destinationSearch")
    .addEventListener("keydown", function (e) {

        if (e.key === "Enter") {
            searchDestinations();
        }

    });


/* =========================================================
   OPEN DESTINATION
========================================================= */

function openDestination(destination) {

    currentDestination = destination;

    selectedPlaces = [];

    document.getElementById("destinationDetails")
        .classList.remove("hidden");


    document.getElementById("destinationName")
        .textContent = destination;


    document.getElementById("destinationDescription")
        .textContent =
        `Select the places you want to visit in ${destination}.`;


    document.getElementById("toLocation")
        .value = destination;


    renderPlaces();

    updateSelectedPlaces();


    document.getElementById("destinationDetails")
        .scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

}


function selectDestination(destination) {

    openDestination(destination);

    document.getElementById("journeySection")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================================================
   RENDER PLACES
========================================================= */

function renderPlaces() {

    const grid =
        document.getElementById("placesGrid");

    grid.innerHTML = "";


    if (!currentDestination) return;


    destinations[currentDestination].forEach(place => {

        const selected =
            selectedPlaces.includes(place);


        const card =
            document.createElement("div");


        card.className =
            "place-card" +
            (selected ? " selected" : "");


        card.innerHTML = `

            <h3>
                📍 ${escapeHTML(place)}
            </h3>

            <p>
                Explore ${escapeHTML(place)}.
            </p>

            <button onclick="togglePlace('${escapeHTML(place)}')">

                ${selected
                ? "✓ Selected"
                : "Select Place"}

            </button>

        `;


        grid.appendChild(card);

    });

}


function togglePlace(place) {

    if (selectedPlaces.includes(place)) {

        selectedPlaces =
            selectedPlaces.filter(
                item => item !== place
            );

    } else {

        selectedPlaces.push(place);

    }


    renderPlaces();

    updateSelectedPlaces();

}


function selectAllPlaces() {

    if (!currentDestination) return;

    selectedPlaces =
        [...destinations[currentDestination]];

    renderPlaces();

    updateSelectedPlaces();

}


function removePlace(place) {

    selectedPlaces =
        selectedPlaces.filter(
            item => item !== place
        );

    renderPlaces();

    updateSelectedPlaces();

}


function updateSelectedPlaces() {

    const list =
        document.getElementById("selectedPlacesList");


    document.getElementById("selectedPlaceCount")
        .textContent =
        `${selectedPlaces.length} selected`;


    if (!selectedPlaces.length) {

        list.innerHTML = `
            <span class="empty-selection">
                No places selected yet.
            </span>
        `;

        return;
    }


    list.innerHTML =
        selectedPlaces.map(place => `

            <span class="place-chip">

                📍 ${escapeHTML(place)}

                <button
                    onclick="removePlace('${escapeHTML(place)}')">
                    ×
                </button>

            </span>

        `).join("");

}


function closeDestination() {

    document
        .getElementById("destinationDetails")
        .classList.add("hidden");

}


/* =========================================================
   RELIGIOUS JOURNEYS
========================================================= */

function openReligious(type) {

    const data = religiousData[type];

    if (!data) return;


    currentDestination = data.title;

    selectedPlaces = [...data.places];


    document.getElementById("destinationDetails")
        .classList.remove("hidden");


    document.getElementById("destinationName")
        .textContent = data.title;


    document.getElementById("destinationDescription")
        .textContent =
        "Select or remove sacred places for your journey.";


    document.getElementById("toLocation")
        .value = data.title;


    renderReligiousPlaces(data.places);

    updateSelectedPlaces();


    document.getElementById("destinationDetails")
        .scrollIntoView({
            behavior: "smooth"
        });

}


function renderReligiousPlaces(places) {

    const grid =
        document.getElementById("placesGrid");

    grid.innerHTML = "";


    places.forEach(place => {

        const selected =
            selectedPlaces.includes(place);


        const card =
            document.createElement("div");


        card.className =
            "place-card" +
            (selected ? " selected" : "");


        card.innerHTML = `

            <h3>
                🛕 ${escapeHTML(place)}
            </h3>

            <p>
                Sacred destination.
            </p>

            <button onclick="togglePlace('${escapeHTML(place)}')">

                ${selected
                ? "✓ Selected"
                : "Select Place"}

            </button>

        `;


        grid.appendChild(card);

    });

}


/* =========================================================
   TRAVEL MODE
========================================================= */

function selectTravelMode(mode) {

    currentTravelMode = mode;

    selectedTravelOption = null;


    document
        .querySelectorAll(".travel-mode-card")
        .forEach(btn => {
            btn.classList.remove("active");
        });


    document
        .getElementById(`mode-${mode}`)
        .classList.add("active");


    document
        .getElementById("travelBookingSection")
        .classList.remove("hidden");


    const titles = {

        car: "🚗 Car Booking",

        bus: "🚌 Bus Booking",

        train: "🚆 Train Booking",

        flight: "✈️ Flight Booking"

    };


    const subtitles = {

        car: "Choose your private / rental car.",

        bus: "Choose your bus service and bus number.",

        train: "Choose your train, train number and class.",

        flight: "Choose your flight and flight number."

    };


    document.getElementById("travelBookingTitle")
        .textContent = titles[mode];


    document.getElementById("travelBookingSubtitle")
        .textContent = subtitles[mode];


    renderTravelOptions();


    document.getElementById("selectedTravelBox")
        .classList.add("hidden");


    document
        .getElementById("travelBookingSection")
        .scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

}


/* =========================================================
   RENDER TRAVEL OPTIONS
========================================================= */

function renderTravelOptions() {

    const container =
        document.getElementById("travelOptions");


    container.innerHTML = "";


    const options =
        travelOptions[currentTravelMode];


    options.forEach(option => {

        const card =
            document.createElement("div");


        card.className = "travel-option-card";


        card.innerHTML = `

            <div class="travel-option-top">

                <div>

                    <h3>
                        ${escapeHTML(option.name)}
                    </h3>

                    <span class="vehicle-number">
                        ${escapeHTML(option.vehicleNo)}
                    </span>

                </div>

                <span class="option-badge">
                    AVAILABLE
                </span>

            </div>


            <div class="travel-option-info">

                Type:
                <strong>
                    ${escapeHTML(option.type)}
                </strong>

                <br>

                ${currentTravelMode === "car"
                ? `Seats: ${option.seats} • ${option.fuel}`
                : `Capacity: ${option.seats} seats`
            }

            </div>


            <div class="travel-option-price">
                ${money(option.price)}
            </div>

            <small>
                ${currentTravelMode === "car"
                ? "Estimated vehicle booking"
                : "Estimated fare per passenger"}
            </small>


            <button
                class="option-select-btn"
                onclick="selectTravelOption('${option.id}')">

                Select This Option

            </button>

        `;


        container.appendChild(card);

    });

}


/* =========================================================
   SELECT TRAVEL OPTION
========================================================= */

function selectTravelOption(id) {

    const options =
        travelOptions[currentTravelMode];


    selectedTravelOption =
        options.find(option => option.id === id);


    if (!selectedTravelOption) return;


    document
        .getElementById("selectedTravelBox")
        .classList.remove("hidden");


    document
        .getElementById("selectedTravelModeBadge")
        .textContent =
        currentTravelMode.toUpperCase();


    const option =
        selectedTravelOption;


    document.getElementById("selectedTravelDetails")
        .innerHTML = `

            <div class="detail-item">
                <span>Travel Name</span>
                <strong>
                    ${escapeHTML(option.name)}
                </strong>
            </div>

            <div class="detail-item">
                <span>
                    ${currentTravelMode === "car"
            ? "Car Number"
            : currentTravelMode === "bus"
                ? "Bus Number"
                : currentTravelMode === "train"
                    ? "Train Number"
                    : "Flight Number"}
                </span>

                <strong>
                    ${escapeHTML(option.vehicleNo)}
                </strong>
            </div>

            <div class="detail-item">
                <span>Type / Class</span>

                <strong>
                    ${escapeHTML(option.type)}
                </strong>
            </div>

            <div class="detail-item">
                <span>Journey</span>

                <strong>
                    ${escapeHTML(
                        document.getElementById("fromLocation").value
                        || "From location"
                    )}
                    →
                    ${escapeHTML(
                        document.getElementById("toLocation").value
                        || "Destination"
                    )}
                </strong>
            </div>

            <div class="detail-item">
                <span>Travel Date</span>

                <strong>
                    ${document.getElementById("travelDate").value || "-"}
                </strong>
            </div>

            <div class="detail-item">
                <span>Fare</span>

                <strong>
                    ${money(
                        currentTravelMode === "car"
                            ? option.price
                            : option.price * getPersons()
                    )}
                </strong>
            </div>

        `;


    createPassengerForms();

    document.getElementById("selectedTravelBox")
        .scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

}


/* =========================================================
   PASSENGER FORMS
========================================================= */

function createPassengerForms() {

    const container =
        document.getElementById("passengerForms");


    const count =
        getPersons();


    container.innerHTML = "";


    for (let i = 1; i <= count; i++) {

        const div =
            document.createElement("div");


        div.className =
            "passenger-form";


        div.innerHTML = `

            <input
                id="passengerName${i}"
                type="text"
                placeholder="Passenger ${i} full name"
                required>


            <select id="passengerId${i}">

                <option value="">
                    Select ID Type
                </option>

                <option value="Aadhaar">
                    Aadhaar
                </option>

                <option value="Passport">
                    Passport
                </option>

                <option value="Driving Licence">
                    Driving Licence
                </option>

                <option value="Other ID">
                    Other ID
                </option>

            </select>

        `;


        container.appendChild(div);

    }

}


/* =========================================================
   CHANGE OPTION
========================================================= */

function changeTravelOption() {

    selectedTravelOption = null;

    document
        .getElementById("selectedTravelBox")
        .classList.add("hidden");

}


/* =========================================================
   CONFIRM TRAVEL SELECTION
========================================================= */
function confirmTravelSelection() {

    if (!selectedTravelOption) {
        alert("Please select a travel option.");
        return;
    }

    const from =
        document.getElementById("fromLocation").value.trim();

    const to =
        document.getElementById("toLocation").value.trim();

    const date =
        document.getElementById("travelDate").value;

    const returnDate =
        document.getElementById("returnDate").value;

    const mobile =
        document.getElementById("mobile").value.trim();

    const persons = getPersons();

    if (!from || !to || !date || !returnDate || !mobile) {
        alert(
            "Please fill From, To, Travel Date, Return Date and Mobile Number."
        );
        return;
    }

    if (!/^[0-9]{10}$/.test(mobile)) {
        alert("Please enter a valid 10 digit mobile number.");
        return;
    }

    const passengerNames = [];

    for (let i = 1; i <= persons; i++) {

        const nameElement =
            document.getElementById(`passengerName${i}`);

        const idElement =
            document.getElementById(`passengerId${i}`);

        const name =
            nameElement ? nameElement.value.trim() : "";

        const id =
            idElement ? idElement.value : "";

        if (!name || !id) {
            alert(`Please fill Passenger ${i} details.`);
            return;
        }

        passengerNames.push(name);
    }

    // ================================
    // TRAVEL PRICE
    // ================================

    const pricePerPerson =
        Number(selectedTravelOption.price) || 0;

    const travelAmount =
        pricePerPerson * persons;

    // ================================
    // TRAVEL BOOKING
    // ================================

    const travelBooking = {

        bookingId:
            "TG-TRAVEL-" + Date.now(),

        mode:
            currentTravelMode,

        optionId:
            selectedTravelOption.id,

        optionName:
            selectedTravelOption.name,

        vehicleNumber:
            selectedTravelOption.vehicleNo,

        type:
            selectedTravelOption.type,

        price:
            pricePerPerson,

        persons:
            persons,

        amount:
            travelAmount,

        passengerNames:
            passengerNames,

        from:
            from,

        to:
            to,

        travelDate:
            date,

        returnDate:
            returnDate,

        mobile:
            mobile,

        status:
            "Confirmed",

        bookingDate:
            new Date().toISOString()
    };

    // ================================
    // SAVE TRAVEL SELECTION
    // ================================

    localStorage.setItem(
        "travelSelection",
        JSON.stringify(travelBooking)
    );

    // ================================
    // SAVE TRAVEL AMOUNT
    // ================================

    const oldTravelAmount =
        Number(localStorage.getItem("travelBookingAmount")) || 0;

    localStorage.setItem(
        "travelBookingAmount",
        String(oldTravelAmount + travelAmount)
    );

    // ================================
    // SAVE NAME + MOBILE
    // ================================

    localStorage.setItem(
        "travelGuestName",
        passengerNames[0] || ""
    );

    localStorage.setItem(
        "travelMobile",
        mobile
    );

    localStorage.setItem(
        "lastTravelBooking",
        JSON.stringify(travelBooking)
    );

    // ================================
    // SUCCESS MESSAGE
    // ================================

    const successBox =
        document.getElementById("travelSelectionSuccess");

    if (successBox) {

        successBox.classList.remove("hidden");

        successBox.innerHTML = `

            <strong>
                ✓ Travel Selection Confirmed
            </strong>

            <br><br>

            ${escapeHTML(selectedTravelOption.name)}

            <br>

            Vehicle / Service No:
            <strong>
                ${escapeHTML(selectedTravelOption.vehicleNo || "N/A")}
            </strong>

            <br><br>

            Passenger:
            <strong>
                ${escapeHTML(passengerNames[0])}
            </strong>

            <br>

            Travel Amount:
            <strong>
                ₹${travelAmount.toLocaleString("en-IN")}
            </strong>

            <br><br>

            Travel fare will be included
            in the final single payment.

        `;
    }

    // Update final cost if function exists
    if (typeof updateFinalCost === "function") {
        updateFinalCost();
    }

    alert(
        "✅ Travel booking confirmed. Travel amount ₹" +
        travelAmount.toLocaleString("en-IN") +
        " saved successfully."
    );
}

/* =========================================================
   HOTELS BOOKING
========================================================= */

function openHotelBooking() {

    const from =
        document.getElementById("fromLocation").value.trim();

    const destination =
        document.getElementById("toLocation").value.trim();

    const travelDate =
        document.getElementById("travelDate").value;

    const returnDate =
        document.getElementById("returnDate").value;

    const persons =
        getPersons();


    if (!destination ||
        !travelDate ||
        !returnDate) {

        alert(
            "Please complete your journey details before booking hotels."
        );

        return;
    }


    const travelPlan = {

        from,

        destination,

        persons,

        travelDate,

        returnDate,

        selectedPlaces

    };


    localStorage.setItem(
        "travelPlan",
        JSON.stringify(travelPlan)
    );


    function openHotelBooking() {

        const from =
            document.getElementById("fromLocation").value.trim();

        const destination =
            document.getElementById("toLocation").value.trim();

        const travelDate =
            document.getElementById("travelDate").value;

        const returnDate =
            document.getElementById("returnDate").value;

        const persons =
            getPersons();

        if (!destination) {
            alert("Please select your destination first.");
            return;
        }

        if (!travelDate || !returnDate) {
            alert("Please select Travel Date and Return Date first.");
            return;
        }

        const travelPlan = {

            from: from,

            destination: destination,

            persons: persons,

            travelDate: travelDate,

            returnDate: returnDate,

            selectedPlaces: [...selectedPlaces]

        };

        localStorage.setItem(
            "travelPlan",
            JSON.stringify(travelPlan)
        );

        window.location.href =
            "hotels.html?destination=" +
            encodeURIComponent(destination);
    }

}

function checkHotelsStatus() {

    const hotelBooking =
        JSON.parse(
            localStorage.getItem("latestHotelBooking") || "null"
        );


    const completed =
        localStorage.getItem("hotelBookingCompleted") === "true";


    const status =
        document.getElementById("hotelStatus");


    if (completed && hotelBooking) {

        status.classList.add("completed");


        status.innerHTML = `

            ✓ Hotel Booked

            <br>

            <strong>
                ${escapeHTML(
            hotelBooking.hotelName ||
            hotelBooking.name ||
            "Selected Hotel"
        )}
            </strong>

            <br>

            Hotel cost will be included
            in the final payment.

        `;

    } else {

        status.classList.remove("completed");

        status.textContent =
            "Hotel booking not completed yet.";

    }

}


/* =========================================================
   ROUTER MAP
========================================================= */

async function geocode(place) {

    const url =
        "https://nominatim.openstreetmap.org/search" +
        "?format=json" +
        "&limit=1" +
        "&countrycodes=in" +
        "&q=" +
        encodeURIComponent(place);


    const response =
        await fetch(url, {
            headers: {
                "Accept-Language": "en"
            }
        });


    const data =
        await response.json();


    if (!data.length) {

        throw new Error(
            "Location not found: " + place
        );

    }


    return [
        Number(data[0].lat),
        Number(data[0].lon)
    ];

}


async function calculateRoute() {

    const from =
        document.getElementById("fromLocation")
            .value.trim();


    const to =
        document.getElementById("toLocation")
            .value.trim();


    if (!from || !to) {

        alert(
            "Please enter From and select To."
        );

        return;
    }


    try {

        const a =
            await geocode(from);


        const b =
            await geocode(to);


        const url =
            `https://router.project-osrm.org/route/v1/driving/` +
            `${a[1]},${a[0]};${b[1]},${b[0]}` +
            `?overview=full&geometries=geojson`;


        const response =
            await fetch(url);


        const data =
            await response.json();


        if (data.code !== "Ok") {

            throw new Error(
                "Route not found."
            );

        }


        const route =
            data.routes[0];


        document.getElementById("distance")
            .textContent =
            (route.distance / 1000).toFixed(1)
            + " km";


        document.getElementById("travelTime")
            .textContent =
            Math.round(
                route.duration / 60
            )
            + " min";


        document.getElementById("selectedMode")
            .textContent =
            currentTravelMode.toUpperCase();


        document.getElementById("routeResult")
            .classList.remove("hidden");


        if (!map) {

            map =
                L.map("map")
                    .setView(a, 8);

            L.tileLayer(
                "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                {
                    attribution:
                        "© OpenStreetMap contributors"
                }
            ).addTo(map);

        }


        if (routeLayer) {

            map.removeLayer(routeLayer);

        }


        routeLayer =
            L.geoJSON(
                route.geometry,
                {
                    style: {
                        weight: 5
                    }
                }
            ).addTo(map);


        map.fitBounds(
            routeLayer.getBounds()
        );

    } catch (error) {

        console.error(error);

        alert(
            error.message ||
            "Route calculation failed."
        );

    }

}


/* =========================================================
   GOOGLE MAPS
========================================================= */

function openGoogleRoute() {

    const from =
        document.getElementById("fromLocation")
            .value.trim();


    const to =
        document.getElementById("toLocation")
            .value.trim();


    if (!from || !to) {

        alert(
            "Please enter From and To first."
        );

        return;
    }


    const url =
        "https://www.google.com/maps/dir/" +
        encodeURIComponent(from) +
        "/" +
        encodeURIComponent(to);


    window.open(
        url,
        "_blank"
    );

}


/* =========================================================
   FINAL COST
========================================================= */

function getBaseTripCost() {

    const destination =
        currentDestination ||
        document.getElementById("toLocation")
            .value.trim();


    const plan =
        costPlans[destination];


    const persons =
        getPersons();


    if (!plan) {

        return {
            low: 3000 * persons,
            high: 6000 * persons,
            duration: "-"
        };

    }


    return {

        low: plan[0] * persons,

        high: plan[1] * persons,

        duration: plan[2]

    };

}


function getTravelCost() {

    const booking =
        JSON.parse(
            localStorage.getItem("travelSelection")
            || "null"
        );


    if (!booking) return 0;


    if (booking.mode === "car") {

        return Number(booking.price) || 0;

    }


    return (
        Number(booking.price) || 0
    ) *
        (
            Number(booking.persons) || 1
        );

}


function getHotelCost() {

    const hotel =
        JSON.parse(
            localStorage.getItem("latestHotelBooking")
            || "null"
        );


    if (!hotel) return 0;


    return Number(
        hotel.totalAmount ||
        hotel.total ||
        hotel.totalPrice ||
        hotel.amount ||
        hotel.price ||
        0
    ) || 0;

}


function updateFinalCost() {

    const travel =
        JSON.parse(
            localStorage.getItem("travelSelection")
            || "null"
        );


    const hotelCompleted =
        localStorage.getItem(
            "hotelBookingCompleted"
        ) === "true";


    const costContent =
        document.getElementById("costContent");


    const costLock =
        document.getElementById("costLock");


    /*
       Travel selection + Hotel booking
       are required before final estimate.
    */

    if (!travel || !hotelCompleted) {

        costContent.classList.add("hidden");

        costLock.classList.remove("hidden");

        return;

    }


    costLock.classList.add("hidden");

    costContent.classList.remove("hidden");


    const base =
        getBaseTripCost();


    const travelCost =
        getTravelCost();


    const hotelCost =
        getHotelCost();


    const serviceFee =
        500;




    const baseAverage =
        Math.round(
            (base.low + base.high) / 2
        );


    const total =
        baseAverage +
        travelCost +
        hotelCost +
        serviceFee;


    document.getElementById("summaryDestination")
        .textContent =
        currentDestination ||
        travel.to;


    document.getElementById("summaryPlaces")
        .textContent =
        selectedPlaces.length
            ? `${selectedPlaces.length} selected`
            : "Selected destination";


    document.getElementById("summaryPersons")
        .textContent =
        travel.persons;


    document.getElementById("summaryDuration")
        .textContent =
        base.duration;


    document.getElementById("tripBaseCost")
        .textContent =
        `${money(base.low)} – ${money(base.high)}`;


    document.getElementById("travelBookingCost")
        .textContent =
        money(travelCost);


    document.getElementById("hotelBookingCost")
        .textContent =
        money(hotelCost);




    document.getElementById("finalPayAmount")
        .textContent =
        money(total);


    document.getElementById("finalPaymentButton")
        .dataset.amount =
        total;

}


/* =========================================================
   FINAL SINGLE PAYMENT
========================================================= */

function completeFinalPayment() {

    const travel =
        JSON.parse(
            localStorage.getItem("travelSelection")
            || "null"
        );


    const hotel =
        JSON.parse(
            localStorage.getItem("latestHotelBooking")
            || "null"
        );


    const hotelCompleted =
        localStorage.getItem(
            "hotelBookingCompleted"
        ) === "true";


    if (!travel) {

        alert(
            "Please complete travel selection first."
        );

        return;

    }


    if (!hotelCompleted || !hotel) {

        alert(
            "Please complete hotel booking first."
        );

        return;

    }


    const payment =
        document.querySelector(
            'input[name="paymentMethod"]:checked'
        );


    if (!payment) {

        alert(
            "Please select one payment method."
        );

        return;

    }


    const base =
        getBaseTripCost();


    const travelCost =
        getTravelCost();


    const hotelCost =
        getHotelCost();


    const serviceFee =
        500;


    const total =
        Math.round(
            (base.low + base.high) / 2
        ) +
        travelCost +
        hotelCost +
        serviceFee;


    const reference =
        "TG" +
        Math.floor(
            10000000 +
            Math.random() * 90000000
        );


    const booking = {

        bookingReference: reference,

        destination:
            currentDestination ||
            travel.to,

        places:
            [...selectedPlaces],

        from:
            travel.from,

        to:
            travel.to,

        travelDate:
            travel.travelDate,

        returnDate:
            travel.returnDate,

        persons:
            travel.persons,

        mobile:
            travel.mobile,

        travelMode:
            travel.mode.toUpperCase(),

        travelOption:
            travel.optionName,

        vehicleNumber:
            travel.vehicleNumber,

        travelType:
            travel.type,

        travelCost,

        hotelName:
            hotel.hotelName ||
            hotel.name ||
            "Selected Hotel",

        hotelCost,

        serviceFee,

        totalAmount:
            total,

        paymentMethod:
            payment.value,

        status:
            "CONFIRMED",

        createdAt:
            new Date().toISOString()

    };


    let history =
        JSON.parse(
            localStorage.getItem("travelBookings")
            || "[]"
        );


    history.unshift(booking);


    localStorage.setItem(
        "travelBookings",
        JSON.stringify(history)
    );

    const travelAmount = Number(booking.amount) || 0;

    const oldTravelAmount =
        Number(localStorage.getItem("travelBookingAmount")) || 0;

    localStorage.setItem(
        "travelBookingAmount",
        String(oldTravelAmount + travelAmount)
    );

    const firstPassengerName =
        (booking.passengerNames && booking.passengerNames[0]) || "";

    localStorage.setItem(
        "travelGuestName",
        firstPassengerName
    );

    localStorage.setItem(
        "travelMobile",
        booking.mobile || ""
    );

    localStorage.setItem(
        "lastTravelBooking",
        JSON.stringify(booking)
    );

    document.getElementById("finalSuccess")
        .classList.remove("hidden");


    document.getElementById("finalSuccess")
        .innerHTML = `

            <strong>
                ✅ Complete Trip Booking Confirmed
            </strong>

            <br><br>

            Booking Reference:
            <strong>
                ${reference}
            </strong>

            <br>

            Travel:
            ${escapeHTML(travel.optionName)}

            <br>

            ${escapeHTML(travel.mode.toUpperCase())}
            Number:
            ${escapeHTML(travel.vehicleNumber)}

            <br>

            Hotel:
            ${escapeHTML(
            hotel.hotelName ||
            hotel.name ||
            "Selected Hotel"
        )}

            <br>

            TravelGrid Service Fee:
            ${money(serviceFee)}

            <br>

            Total Paid:
            <strong>
                ${money(total)}
            </strong>

            <br>

            Payment:
            ${escapeHTML(payment.value)}

            <br><br>

            Your complete TravelGrid booking has been saved.

        `;


    renderHistory();


    window.scrollTo({
        top:
            document.getElementById(
                "finalSuccess"
            ).getBoundingClientRect().top +
            window.scrollY -
            120,

        behavior: "smooth"

    });

}


/* =========================================================
   HISTORY
========================================================= */

function renderHistory() {

    const container =
        document.getElementById(
            "travelHistoryList"
        );


    let history =
        JSON.parse(
            localStorage.getItem(
                "travelBookings"
            ) || "[]"
        );


    if (!history.length) {

        container.innerHTML = `

            <div class="empty-history">

                📚 No travel bookings yet.

                <br>

                Your confirmed bookings
                will appear here.

            </div>

        `;

        return;

    }


    container.innerHTML =
        history.map(
            (booking, index) => `

            <div class="history-card">

                <div class="history-top">

                    <h3>
                        ${escapeHTML(
                booking.destination
            )}
                    </h3>

                    <span class="history-ref">
                        ${escapeHTML(
                booking.bookingReference
            )}
                    </span>

                </div>


                <div class="history-details">


                    <div class="history-item">

                        <span>
                            🚘 Travel
                        </span>

                        <strong>
                            ${escapeHTML(
                booking.travelOption
            )}
                        </strong>

                    </div>


                    <div class="history-item">

                        <span>
                            Vehicle / Service No.
                        </span>

                        <strong>
                            ${escapeHTML(
                booking.vehicleNumber
            )}
                        </strong>

                    </div>


                    <div class="history-item">

                        <span>
                            🏨 Hotel
                        </span>

                        <strong>
                            ${escapeHTML(
                booking.hotelName
            )}
                        </strong>

                    </div>


                    <div class="history-item">

                        <span>
                            💰 Total
                        </span>

                        <strong>
                            ${money(
                booking.totalAmount
            )}
                        </strong>

                    </div>


                    <div class="history-item">

                        <span>
                            📅 Travel Date
                        </span>

                        <strong>
                            ${escapeHTML(
                booking.travelDate
            )}
                        </strong>

                    </div>


                    <div class="history-item">

                        <span>
                            👥 Persons
                        </span>

                        <strong>
                            ${booking.persons}
                        </strong>

                    </div>


                    <div class="history-item">

                        <span>
                            💳 Payment
                        </span>

                        <strong>
                            ${escapeHTML(
                booking.paymentMethod
            )}
                        </strong>

                    </div>


                    <div class="history-item">

                        <span>
                            🏢 TravelGrid Fee
                        </span>

                        <strong>
                            ₹500
                        </strong>

                    </div>

                </div>


                <button
                    class="delete-history-btn"
                    onclick="deleteHistory(${index})">

                    🗑️ Delete

                </button>

            </div>

        `
        ).join("");

}


function deleteHistory(index) {

    let history =
        JSON.parse(
            localStorage.getItem(
                "travelBookings"
            ) || "[]"
        );


    history.splice(index, 1);


    localStorage.setItem(
        "travelBookings",
        JSON.stringify(history)
    );


    renderHistory();

}


function deleteAllHistory() {

    if (
        !confirm(
            "Delete all TravelGrid travel history?"
        )
    ) {
        return;
    }


    localStorage.removeItem(
        "travelBookings"
    );


    renderHistory();

}


/* =========================================================
   LOGOUT
========================================================= */

function logoutUser() {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.location.href =
        "login.html";

}


/* =========================================================
   PAGE LOAD
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        renderDestinations();

        checkHotelStatus();

        renderHistory();


        const params =
            new URLSearchParams(
                window.location.search
            );


        if (
            params.get("hotelBooked") === "true"
        ) {

            checkHotelStatus();

            updateFinalCost();

        }


        /*
           If hotel booking already exists
        */

        if (
            localStorage.getItem(
                "hotelBookingCompleted"
            ) === "true"
        ) {

            checkHotelStatus();

        }


        /*
           Update cost whenever persons/date changes
        */

        document
            .getElementById("passengers")
            .addEventListener(
                "input",
                function () {

                    if (selectedTravelOption) {
                        createPassengerForms();
                    }

                    updateFinalCost();

                }
            );


        document
            .getElementById("travelDate")
            .addEventListener(
                "change",
                updateFinalCost
            );


        document
            .getElementById("returnDate")
            .addEventListener(
                "change",
                updateFinalCost
            );

    }
);
// ======================================================
// TRAVELGRID FINAL PAYMENT SYSTEM
// ======================================================

let selectedFinalPayment = "UPI";


// ======================================================
// GET TRAVEL BOOKING AMOUNT
// ======================================================

function getTravelBookingAmount() {

    let amount = 0;

    // Existing travel booking amount
    const storedTravelAmount =
        localStorage.getItem("travelBookingAmount");

    if (storedTravelAmount) {
        amount = Number(storedTravelAmount) || 0;
    }

    // Try existing travel booking
    const lastTravelBooking =
        JSON.parse(
            localStorage.getItem("lastTravelBooking")
        );

    if (
        lastTravelBooking &&
        Number(lastTravelBooking.totalAmount)
    ) {

        amount =
            Number(lastTravelBooking.totalAmount);

    }

    return amount;
}


// ======================================================
// GET HOTEL BOOKING AMOUNT
// ======================================================

function getHotelBookingAmount() {

    const amount =
        Number(
            localStorage.getItem("hotelTotalAmount")
        ) || 0;

    return amount;
}


// ======================================================
// UPDATE FINAL COST
// ======================================================

function updateFinalTravelGridCost() {

    const travelAmount =
        getTravelBookingAmount();

    const hotelAmount =
        getHotelBookingAmount();


    const totalAmount =
        travelAmount +
        hotelAmount;


    // Travel amount
    const finalTravel =
        document.getElementById(
            "finalTravelAmount"
        );

    if (finalTravel) {

        finalTravel.textContent =
            "₹" +
            travelAmount.toLocaleString("en-IN");

    }


    // Hotel amount
    const finalHotel =
        document.getElementById(
            "finalHotelAmount"
        );

    if (finalHotel) {

        finalHotel.textContent =
            "₹" +
            hotelAmount.toLocaleString("en-IN");

    }


    // Total
    const finalTotal =
        document.getElementById(
            "finalTotalAmount"
        );

    if (finalTotal) {

        finalTotal.textContent =
            "₹" +
            totalAmount.toLocaleString("en-IN");

    }



    // Payment amount
    const paymentAmount =
        document.getElementById(
            "finalPaymentAmountValue"
        );

    if (paymentAmount) {

        paymentAmount.textContent =
            "₹" +
            totalAmount.toLocaleString("en-IN");

    }


    return totalAmount;
}


// ======================================================
// OPEN FINAL PAYMENT
// ======================================================

function openFinalPayment() {

    const travelAmount =
        getTravelBookingAmount();

    const hotelAmount =
        getHotelBookingAmount();

    const totalAmount =
        travelAmount +
        hotelAmount;


    if (totalAmount <= 0) {

        alert(
            "Please complete your Travel or Hotel booking first."
        );

        return;
    }


    const paymentBox =
        document.getElementById(
            "paymentBox"
        );

    if (paymentBox) {

        paymentBox.style.display =
            "block";

    }


    updateFinalTravelGridCost();


    const paymentAmount =
        document.getElementById(
            "finalPaymentAmountValue"
        );

    if (paymentAmount) {

        paymentAmount.textContent =
            "₹" +
            totalAmount.toLocaleString("en-IN");

    }


    // Scroll
    if (paymentBox) {

        setTimeout(() => {

            paymentBox.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, 200);

    }

}


// ======================================================
// SELECT PAYMENT METHOD
// ======================================================

function selectPayment(method) {

    selectedFinalPayment =
        method;


    document
        .querySelectorAll(
            ".payment-method"
        )
        .forEach(button => {

            button.classList.remove(
                "active"
            );

        });


    const selectedButton =
        document.querySelector(
            `.payment-method[data-pay="${method}"]`
        );

    if (selectedButton) {

        selectedButton.classList.add(
            "active"
        );

    }


    const fields =
        document.getElementById(
            "paymentFields"
        );

    if (!fields) {
        return;
    }


    // UPI
    if (method === "UPI") {

        fields.innerHTML = `

            <div class="payment-input-box">

                <label>
                    UPI ID
                </label>

                <input
                    type="text"
                    id="upiId"
                    placeholder="example@upi">

            </div>

        `;

        return;
    }


    // CARD
    if (method === "Card") {

        fields.innerHTML = `

            <div class="payment-input-box">

                <label>
                    Card Number
                </label>

                <input
                    type="text"
                    id="cardNumber"
                    maxlength="16"
                    placeholder="Enter 16 digit card number">

            </div>


            <div class="payment-two-column">

                <div>

                    <label>
                        Expiry
                    </label>

                    <input
                        type="text"
                        id="cardExpiry"
                        placeholder="MM/YY">

                </div>


                <div>

                    <label>
                        CVV
                    </label>

                    <input
                        type="password"
                        id="cardCvv"
                        maxlength="3"
                        placeholder="CVV">

                </div>

            </div>

        `;

        return;
    }


    // ONLINE BANKING
    if (method === "Net Banking") {

        fields.innerHTML = `

            <div class="payment-input-box">

                <label>
                    Select Bank
                </label>

                <select id="bankName">

                    <option value="">
                        Select Bank
                    </option>

                    <option>
                        State Bank of India
                    </option>

                    <option>
                        HDFC Bank
                    </option>

                    <option>
                        ICICI Bank
                    </option>

                    <option>
                        Axis Bank
                    </option>

                    <option>
                        Bank of Maharashtra
                    </option>

                </select>

            </div>

        `;

        return;
    }


    // CASH
    if (method === "Cash") {

        fields.innerHTML = `

            <div class="cash-payment-note">

                💵 <strong>Cash / Pay at Counter</strong>

                <p>
                    You can pay the total amount
                    at the selected counter.
                </p>

            </div>

        `;

    }

}


// ======================================================
// COMPLETE FINAL PAYMENT
// ======================================================

function completeFinalPayment() {

    const travelAmount =
        getTravelBookingAmount();

    const hotelAmount =
        getHotelBookingAmount();

    const totalAmount =
        travelAmount +
        hotelAmount;


    if (totalAmount <= 0) {

        alert(
            "No booking amount found."
        );

        return;
    }


    // ==============================================
    // PAYMENT VALIDATION
    // ==============================================

    if (
        selectedFinalPayment === "UPI"
    ) {

        const upi =
            document.getElementById(
                "upiId"
            )?.value.trim();

        if (!upi) {

            alert(
                "Please enter your UPI ID."
            );

            return;
        }

    }


    if (
        selectedFinalPayment === "Card"
    ) {

        const card =
            document.getElementById(
                "cardNumber"
            )?.value.trim();

        const expiry =
            document.getElementById(
                "cardExpiry"
            )?.value.trim();

        const cvv =
            document.getElementById(
                "cardCvv"
            )?.value.trim();


        if (
            !card ||
            !expiry ||
            !cvv
        ) {

            alert(
                "Please enter complete card details."
            );

            return;
        }


        if (
            !/^\d{16}$/.test(card)
        ) {

            alert(
                "Card number must contain 16 digits."
            );

            return;
        }

    }


    if (
        selectedFinalPayment === "Net Banking"
    ) {

        const bank =
            document.getElementById(
                "bankName"
            )?.value;

        if (!bank) {

            alert(
                "Please select your bank."
            );

            return;
        }

    }


    // ==============================================
    // CREATE FINAL BOOKING
    // ==============================================

    const finalBookingId =
        "TG-FINAL-" +
        Date.now();


    const lastTravelBooking =
        JSON.parse(
            localStorage.getItem(
                "lastTravelBooking"
            )
        ) || null;


    const lastHotelBooking =
        JSON.parse(
            localStorage.getItem(
                "lastHotelBooking"
            )
        ) || null;


    const finalBooking = {

        bookingId:
            finalBookingId,

        travelAmount:
            travelAmount,

        hotelAmount:
            hotelAmount,

        totalAmount:
            totalAmount,

        paymentMethod:
            selectedFinalPayment,

        paymentStatus:
            "Payment Successful",

        travelBooking:
            lastTravelBooking,

        hotelBooking:
            lastHotelBooking,

        bookingDate:
            new Date().toISOString()

    };


    // ==============================================
    // SAVE FINAL BOOKING
    // ==============================================

    localStorage.setItem(
        "travelGridFinalBooking",
        JSON.stringify(
            finalBooking
        )
    );


    // Final booking history
    let finalBookings =
        JSON.parse(
            localStorage.getItem(
                "travelGridFinalBookings"
            )
        ) || [];


    finalBookings.push(
        finalBooking
    );


    localStorage.setItem(
        "travelGridFinalBookings",
        JSON.stringify(
            finalBookings
        )
    );


    // ==============================================
    // SHOW SUCCESS
    // ==============================================

    const success =
        document.getElementById(
            "finalBookingSuccess"
        );


    if (success) {

        success.style.display =
            "block";


        success.innerHTML = `

            <div class="success-icon">
                ✅
            </div>

            <h2>
                Payment Completed Successfully!
            </h2>

            <p>
                Your TravelGrid booking has been confirmed.
            </p>


            <div class="final-confirmation-card">

                <div class="confirmation-row">

                    <span>
                        Travel Booking
                    </span>

                    <strong>
                        ₹${travelAmount.toLocaleString("en-IN")}
                    </strong>

                </div>


                <div class="confirmation-row">

                    <span>
                        Hotel Booking
                    </span>

                    <strong>
                        ₹${hotelAmount.toLocaleString("en-IN")}
                    </strong>

                </div>


                <div class="confirmation-row total">

                    <span>
                        Total Amount Paid
                    </span>

                    <strong>
                        ₹${totalAmount.toLocaleString("en-IN")}
                    </strong>

                </div>


                <div class="confirmation-row">

                    <span>
                        Payment Method
                    </span>

                    <strong>
                        ${selectedFinalPayment}
                    </strong>

                </div>


                <div class="confirmation-row">

                    <span>
                        Booking ID
                    </span>

                    <strong>
                        ${finalBookingId}
                    </strong>

                </div>

            </div>


            <!-- TRAVEL OPTION -->

            ${lastTravelBooking
                ?
                `
                <button
                    class="final-view-btn"
                    onclick="viewFinalTravelBooking()">

                    🎫 View Travel Ticket

                </button>
                `
                :
                ""
            }


            <!-- HOTEL OPTION -->

            ${lastHotelBooking
                ?
                `
                <button
                    class="final-view-btn hotel"
                    onclick="viewFinalHotelBooking()">

                    🏨 View Hotel Booking

                </button>
                `
                :
                ""
            }


            <button
                class="final-view-btn"
                onclick="viewFinalBooking()">

                📄 View Complete TravelGrid Booking

            </button>

        `;

    }


    // Hide payment
    const paymentBox =
        document.getElementById(
            "paymentBox"
        );

    if (paymentBox) {

        paymentBox.style.display =
            "none";

    }


    alert(
        "✅ Payment Successful!\n\n" +
        "Travel: ₹" +
        travelAmount.toLocaleString("en-IN") +
        "\nHotel: ₹" +
        hotelAmount.toLocaleString("en-IN") +
        "\nTotal: ₹" +
        totalAmount.toLocaleString("en-IN")
    );

}


// ======================================================
// VIEW TRAVEL BOOKING
// ======================================================

function viewFinalTravelBooking() {

    const booking =
        JSON.parse(
            localStorage.getItem(
                "lastTravelBooking"
            )
        );


    if (!booking) {

        alert(
            "Travel booking not found."
        );

        return;
    }


    alert(

        "🎫 TRAVEL TICKET\n\n" +

        "Booking ID: " +
        (
            booking.bookingId ||
            "-"
        ) +

        "\nFrom: " +
        (
            booking.from ||
            booking.fromCity ||
            "-"
        ) +

        "\nTo: " +
        (
            booking.to ||
            booking.toCity ||
            "-"
        ) +

        "\nTravel Mode: " +
        (
            booking.mode ||
            "-"
        ) +

        "\nAmount: ₹" +
        (
            Number(
                booking.totalAmount ||
                booking.amount ||
                0
            )
        ).toLocaleString("en-IN")

    );

}


// ======================================================
// VIEW HOTEL BOOKING
// ======================================================

function viewFinalHotelBooking() {

    const booking =
        JSON.parse(
            localStorage.getItem(
                "lastHotelBooking"
            )
        );


    if (!booking) {

        alert(
            "Hotel booking not found."
        );

        return;
    }


    alert(

        "🏨 HOTEL BOOKING\n\n" +

        "Booking ID: " +
        booking.bookingId +

        "\nHotel: " +
        booking.hotelName +

        "\nCity: " +
        booking.city +

        "\nPlace: " +
        booking.place +

        "\nGuest: " +
        booking.guestName +

        "\nCheck-in: " +
        booking.checkIn +

        "\nCheck-out: " +
        booking.checkOut +

        "\nGuests: " +
        booking.guests +

        "\nRooms: " +
        booking.rooms +

        "\nTotal: ₹" +
        Number(
            booking.totalAmount || 0
        ).toLocaleString("en-IN")

    );

}


// ======================================================
// VIEW COMPLETE BOOKING
// ======================================================

function viewFinalBooking() {

    const booking =
        JSON.parse(
            localStorage.getItem(
                "travelGridFinalBooking"
            )
        );


    if (!booking) {

        alert(
            "Final booking not found."
        );

        return;
    }


    alert(

        "🌍 TRAVELGRID FINAL BOOKING\n\n" +

        "Booking ID: " +
        booking.bookingId +

        "\n\nTravel Amount: ₹" +
        Number(
            booking.travelAmount
        ).toLocaleString("en-IN") +

        "\nHotel Amount: ₹" +
        Number(
            booking.hotelAmount
        ).toLocaleString("en-IN") +

        "\nTotal Paid: ₹" +
        Number(
            booking.totalAmount
        ).toLocaleString("en-IN") +

        "\nPayment: " +
        booking.paymentMethod +

        "\nStatus: " +
        booking.paymentStatus

    );

}


// ======================================================
// LOAD FINAL COST WHEN PAGE OPENS
// ======================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        updateFinalTravelGridCost();

        // Default payment method
        selectPayment("UPI");

    }
);