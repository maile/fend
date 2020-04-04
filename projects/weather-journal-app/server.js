// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
let express = require('express');
let cors = require('cors');
let bodyParser = require('body-parser');

// Start up an instance of app
app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Initialize the main project folder
app.use(express.static('website'));

// set up routes
app.get('/weather', getWeather);
app.post('/weather', postWeather);

function getWeather(req, res) {
    res.send(projectData);
}

function postWeather(req, res) {
    let data = req.body;
    projectData['temperature'] = data['temperature'];
    projectData['date'] = data['date'];
    projectData['mood'] = data['mood'];
}

// Setup Server
app.listen(3000, (req, res) => {
  console.log('server running!');
});
