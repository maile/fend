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

function dateDiff(today, then) {
    let miliSecondsUntil = then.getTime() - today.getTime();
    let secondsUntil = Math.floor(miliSecondsUntil / 1000);
    let minutesUntil = Math.floor(secondsUntil / 60);
    let hoursUntil = Math.floor(minutesUntil / 60);
    return Math.floor(hoursUntil / 24);
}

function daysUntil(date)
{
    let today = new Date(Date.now());
    let then = new Date(date);

    return dateDiff(today, then);
}

async function destWeather(dest, date) {
    console.log(`requesting info for ${dest} on ${date}`);
    return postData('/weather', { 'dest': dest, 'date': date})
    .then(x => x.json())
    .then(x => {
        x.until = daysUntil(date);
        return x;
    })
    .catch(err => console.log('failed to request weather'));
}

async function destImage(dest) {
    console.log(`requesting image for ${dest}`);
    return postData('/image', { 'dest': dest })
    .then(x => x.json())
    .then(x => {
        return x;
    })
    .catch(err => console.log('failed to request image'));
}
export { destWeather, destImage, postData, daysUntil, dateDiff };