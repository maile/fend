const fetch = require('node-fetch');
const dotenv = require('dotenv');
dotenv.config();
const baseURL = 'https://api.weatherbit.io/v2.0/'
const dailyURL = `${baseURL}/forecast/daily?key=${process.env.WEATHERBIT_KEY}&units=I`;
const histURL = `${baseURL}/history/daily?key=${process.env.WEATHERBIT_KEY}&units=I`;

function getDailyForecast(dateIndex, lat, lon) {
    let url = `${dailyURL}&lat=${lat}&lon=${lon}`;
    console.log(`getting daily forecast from ${url}`);
    return fetch(url)
    .then(x => x.json())
    .then(x => {
        x = x.data[dateIndex];
        console.log(x);
        return { 'high': x.high_temp, 'low': x.low_temp, 'desc': x.weather.description };
    }).catch(err => console.log(err));
}

function getDateString(date)
{
    return date.toISOString().substring(0, 10)
}
function nextDate(date)
{
    let result = new Date(date)
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
        x = x.data[0];
        console.log(x);
        return { 'high': x.max_temp, 'low': x.min_temp, 'desc': 'fine' };
    }).catch(err => console.log(err));
}

function msToDays(ms)
{
    let seconds = Math.floor(ms / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
    return days;
}

// get forecast for the given date, latitude, and longtitude
function getForecast(date, lat, lon)
{
    let today = new Date(Date.now());

    // if date is in the past, throw an error
    let forecastDate = new Date(date);
    if (forecastDate < today) {
        throw 'date is in the past!';
    }

    // if date is within the next 16 days, we can get a future forecast
    let dateIndex = msToDays(forecastDate - today);
    if (dateIndex < 16) {
        return getDailyForecast(dateIndex, lat, lon);
    } else {
        // else get a historical forecast for the date, but previous year
        forecastDate.setFullYear('2019');
        return getHistForecast(getDateString(forecastDate), lat, lon);
    }
}
exports.getForecast = getForecast;