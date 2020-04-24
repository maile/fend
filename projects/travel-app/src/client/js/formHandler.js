import { destWeather } from './travelInfo'

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let dest = document.getElementById('travel_dest').value

    console.log(dest);

    destWeather(dest)
    .then(x => {
        console.log(`for "${dest}" we got:`);
        console.log(x);
        document.getElementById('weather').innerHTML = x.weather;
    })
}

export { handleSubmit }
