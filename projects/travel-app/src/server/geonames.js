const fetch = require('node-fetch');
const dotenv = require('dotenv');
dotenv.config();
const geonameBaseUrl = 'http://api.geonames.org/'

async function search(place) {
    const username = process.env.GEONAME_USER;
    const url = `${geonameBaseUrl}searchJSON?username=${username}&name=${place}`;

    return fetch(url)
    .then(x=>x.json())
     // just return the first result
    .then(x=>x.geonames[0])
    .then(x => {
        console.log(x);
        return x;
    })
    .catch(x=>console.log(`error fetching ${url}`, x));
}
exports.search = search