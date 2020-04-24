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

async function destWeather(dest, date) {
    console.log(`requesting info for ${dest} on ${date}`);
    return postData('/weather', { 'dest': dest, 'date': date})
    .then(x => x.json())
    .catch(err => console.log('failed to request weather'));
}

export { destWeather, postData };