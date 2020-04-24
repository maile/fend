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

function daysUntil(date)
{
    let today = new Date(Date.now());
    let then = new Date(date);
    let miliSecondsUntil = then.getTime() - today.getTime();
    let secondsUntil = Math.floor(miliSecondsUntil / 1000);
    let minutesUntil = Math.floor(secondsUntil / 60);
    let hoursUntil = Math.floor(minutesUntil / 60);
    let daysUntil = Math.floor(hoursUntil / 24);
    return daysUntil;
}
async function destWeather(dest, date) {
    console.log(`requesting info for ${dest} on ${date}`);
    return postData('/weather', { 'dest': dest, 'date': date})
    .then(x => x.json())
    .catch(err => console.log('failed to request weather'));
}

export { destWeather, postData, daysUntil };