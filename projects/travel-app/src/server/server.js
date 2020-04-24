// Setup empty JS object to act as endpoint for all routes
projectData = {};
const dotenv = require('dotenv');
dotenv.config();

const Geonames = require('geonames.js')
const geonames = new Geonames({
    username: process.env.GEONAME_USER,
    lan: 'en',
    encoding: 'JSON'
  });

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
app.get('/weather', getWeather);
app.post('/weather', postWeather);

function getWeather(req, res) {
    res.send(JSON.stringify(projectData));
}

function postWeather(req, res) {
    let data = req.body;
    console.log(data);
    try {
        newEntry = {
            temperature: data['temperature'],
            date: data['date'],
            mood: data['mood'],
        }
        projectData = newEntry;
        console.log('added: ' + JSON.stringify(newEntry));
        res.status(200).send("success");
    } catch (error) {
        console.log(error);
    }
}

// Setup Server
app.listen(3000, (req, res) => {
  console.log('server running on port 3000!');
});
