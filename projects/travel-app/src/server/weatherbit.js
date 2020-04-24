const fetch = require('node-fetch');
const dotenv = require('dotenv');
dotenv.config();
const baseURL = 'https://api.weatherbit.io/v2.0/'
const dailyURL = `${baseURL}/forecast/daily?key=${process.env.WEATHERBIT_KEY}`;
const histURL = `${baseURL}/history/daily?key=${process.env.WEATHERBIT_KEY}`;

function getDailyForecast(date, lat, lon) {
    let url = `${dailyURL}&lat=${lat}&lon=${lon}`;
    let dateIndex = new
    console.log(`getting daily forecast from ${url}`);
    return fetch(url)
    .then(x => x.json())
    .then(x => {
        console.log(x);
        return x;
    }).catch(err => console.log(err));
}

function getDateString(date)
{
    return date.toISOString().substring(0, 10)
}
function nextDate(date)
{
    result = new Date(date)
    result.setDate(result.getDate() + 1)
    return getDateString(result)
}

function getHistForecast(date, lat, lon) {
    let endDate = nextDate(date);
    let url = `${histURL}&lat=${lat}&lon=${lon}&start_date=${date}&end_date=${endDate}`;

    console.log(`getting historical forecast from ${url}`);

    return fetch(url)
    .then(x => x.json())
    .then(x => {
        console.log(x.data[0]);
        return x.data[0];
    }).catch(err => console.log(err));
}

// get forecast for the given date, latitude, and longtitude
function getForecast(date, lat, lon)
{
    // if date is in the past, throw an error
    // if date is within the next 16 days, we can get a future forecast
    // else get a historical forecast for the date, but previous year
}
exports.getForecast = getForecast;
exports.getHistForecast = getHistForecast;