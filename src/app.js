const express = require('express');
const connectDB = require('./config/db');
const categoryRoutes = require('./routes/categoryRoutes');
const logger = require('./middlewares/logger');
require('dotenv').config(); // Load environment variables

const app = express();
connectDB(); // Connect to the database

app.use(express.json()); // Middleware to parse JSON request bodies
app.use(logger); // Use logger middleware

// Routes
app.use('/api', categoryRoutes);

// Default route
app.get('/', (req, res) => res.send('API is working!'));

module.exports = app;