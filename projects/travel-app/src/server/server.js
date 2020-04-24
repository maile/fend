const geonames = require('./geonames.js');
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
app.use(cors());

// Initialize the main project folder
app.use(express.static('dist'));

// set up routes
app.post('/weather', destWeather);

function getWeather(req, res) {
    res.send(JSON.stringify(projectData));
}

function destWeather(req, res) {
    let data = req.body;
    console.log(data);
    try {
        let countryInfo = geonames.search(data.dest);
        let date = data.date;
        console.log(`calculating weather on ${date} at ${data.dest}`);
        res.send(JSON.stringify({weather: "fine"}));
    } catch (error) {
        console.log(error);
    }
}

// Setup Server
app.listen(3000, (req, res) => {
  console.log('server running on port 3000!');
});
