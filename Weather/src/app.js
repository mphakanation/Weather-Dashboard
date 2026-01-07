const express = require('express');
const path = require('path');
const weatherRoutes = require('./routes/weatherRoutes');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// API routes
app.use('/api/weather', weatherRoutes);

module.exports = app;
