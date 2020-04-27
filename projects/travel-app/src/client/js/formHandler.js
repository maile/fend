import { destWeather, destImage } from './travelInfo'

function handleSubmit(event) {
    event.preventDefault()

    // first grab the weather
    let dest = document.getElementById('travel_dest').value
    let date = document.getElementById('travel_date').value

    destWeather(dest, date)
    .then(x => {
        console.log(`for "${dest}" we got:`);
        console.log(x);
        document.getElementById('countdown').innerHTML = `Your trip is ${x.until} days away!`;
        document.getElementById('weather').innerHTML = `On your arrival date, the weather will be: <br> High of ${x.weather.high} <br> Low of ${x.weather.low} <br> Otherwise ${x.weather.desc}`;
    })
    destImage(dest)
    .then(x => {
        document.getElementById('dest_img').innerHTML = `<img src="${x.img}">`;
    })
}

export { handleSubmit }
