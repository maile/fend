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

async function requestSentiment(url) {
    console.log("::: Running requestSentiment :::", url);
    return postData('http://localhost:8080/sentiment', { 'url': url}).catch(err => console.log('failed to request sentiment'));
}

export { requestSentiment, postData }