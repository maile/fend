/* Global Variables */
let weatherKey = "2fc98d052054a85b926425ad58642b71";

function getWeatherUrl(zip) {
    return `http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&units=imperial&appid=${weatherKey}`;
}

async function getWeather(zip) {
    const url = getWeatherUrl(zip);

    try {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    } catch (error) {
        alert(error);
        console.log(error);
    }
}

async function getTemp(zip) {
    return getWeather(zip).then((weather) => {
        return weather.main.temp;
    }).catch((error) => {
        console.log("failed to get temperature for zip " + zip);
    });
}

async function postData(url = '', data = {}) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return response;
    } catch (error) {
        console.log(error);
    }
}

async function updateUI() {
    try {
        const request = await fetch('/weather');
        const data = await request.json();
        document.getElementById('date').innerHTML = data['date'];
        document.getElementById('temp').innerHTML = data['temperature'];
        document.getElementById('content').innerHTML = data['mood'];
        console.log(data);
    } catch (error) {
        console.log(error);
    }
    console.log("updating UI...");
}

document.getElementById('generate').addEventListener('click', generateEntry);

async function generateEntry(e) {
    const zip = document.getElementById("zip").value;
    const mood = document.getElementById("feelings").value;

    getTemp(zip)
    // Now we have all our data, send it to the server
    .then(temp => postData('/weather', {temperature: temp, date: newDate, mood: mood}))
    .then(updateUI());
}

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
