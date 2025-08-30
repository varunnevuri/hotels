const mongoose = require('mongoose');

// Define the MongoDB connection URL (use your DB name instead of 'hotels')
const mongoURL = 'mongodb://localhost:27017/hotels';

// Connect mongoose with MongoDB
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Mongoose maintains a default connection object
const db = mongoose.connection;

// Define event listeners for database connection
db.on('connected', () => {
    console.log('✅ Connected to MongoDB server');
});

db.on('error', (err) => {
    console.error('❌ MongoDB connection error:', err);
});

db.on('disconnected', () => {
    console.log('⚠️ MongoDB disconnected');
});

module.exports = db;
