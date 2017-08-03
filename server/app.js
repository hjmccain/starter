const express = require('express');
const path = require('path');

const app = express();

// add bodyParser if you're gonna be parsing JSON!!!!

// Routes go here

// As default if no other routes catch a request,
// always return the main index.html, so react-router renders the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

app.use(express.static(path.resolve(__dirname, '..', 'build')));

module.exports = app;
