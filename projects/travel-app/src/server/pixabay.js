const fetch = require('node-fetch');
const dotenv = require('dotenv');
dotenv.config();
// https://pixabay.com/api/docs/
const baseURL = `https://pixabay.com/api/?key=${process.env.PIXABAY_KEY}`

function findImage(dest) {
    let destURI = encodeURI(dest);
    let url = `${baseURL}&q=${destURI}&category=travel`
    return fetch(url)
    .then(x => x.json())
    .then(x => {
        x = x.hits[0];
        console.log(x);
        return x.webformatURL;
    })
}

exports.findImage = findImage;