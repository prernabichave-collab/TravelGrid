const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "TravelGrid@123",
    database: "travelgrid"

});

db.connect((err) => {
    if (err) {
        console.log("❌ MySQL Connection Failed");
        console.log(err.message);
    } else {
        console.log("✅ MySQL Connected");
    }
});

module.exports = db;