const mongoose = require('mongoose');
const mysql = require('mysql2/promise');

const connectMongoDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/travelgrid');
        console.log("✅ MongoDB Connected!");
    } catch (err) {
        console.error("❌ MongoDB Error:", err.message);
    }
};

const mysqlPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'TravelGrid@123',
    database: 'travelgrid',
    port: 3306
});

module.exports = { connectMongoDB, mysqlPool };