const geonames = require('./geonames.js');
const weatherbit = require('./weatherbit.js');
const pixabay = require('./pixabay.js');

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
app.post('/image', destImage);


function destWeather(req, res) {
    let data = req.body;
    console.log(data);
    try {
        geonames.search(data.dest)
        .then(countryInfo => {
            let long = countryInfo.lng;
            let lat = countryInfo.lat;
            let date = data.date;
            console.log(`calculating weather on ${date} at ${long} ${lat}`);
            weatherbit.getForecast(date, lat, long)
            .then(forecast => {
                console.log(forecast);
                res.send(JSON.stringify({weather: forecast}));
            })
        })
    } catch (error) {
        console.log(error);
    }
}

function destImage(req, res) {
    let data = req.body;

    try {
        pixabay.findImage(data.dest)
        .then(imgURL => {
            res.send(JSON.stringify({img: imgURL}));
        }) .catch(err => console.log(err))
    } catch (error) {
        console.log(error);
    }
}
// Setup Server
app.listen(3000, (req, res) => {
  console.log('server running on port 3000!');
});
