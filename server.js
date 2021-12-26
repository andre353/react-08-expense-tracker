// getting dependencies
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');

dotenv.config({ path: './config/config.env' });

// Initialize our express app
const app = express();

// route
app.get('/', (req, res) => res.send('Hello'));

const PORT = process.env.PORT || 5000;

// listen to port
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));