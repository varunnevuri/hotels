const express = require('express');
const app = express();
const db = require('./db'); // MongoDB connection

// Middleware to parse JSON (important if you add APIs later)
app.use(express.json());

// Default route
app.get('/', (req, res) => {
  res.send('🍴 Welcome to my hotel! How can I help you? We have a list of food.');
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
