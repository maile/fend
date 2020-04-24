import { destWeather } from './travelInfo'

function handleSubmit(event) {
    event.preventDefault()

    // first grab the weather
    let dest = document.getElementById('travel_dest').value
    let date = document.getElementById('travel_date').value

    destWeather(dest, date)
    .then(x => {
        console.log(`for "${dest}" we got:`);
        console.log(x);
        document.getElementById('weather').innerHTML = x.weather;
    })
}

export { handleSubmit }
