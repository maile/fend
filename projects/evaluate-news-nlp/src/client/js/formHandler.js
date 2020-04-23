import { requestSentiment } from "./NLPClient";
import isURL from 'validator/lib/isURL'

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let analUrl = document.getElementById('anal_url').value

    if (!isURL(analUrl)) {
        alert('please enter a valid URL!');
        return false;
    }

    console.log("analysing " + analUrl + "....");
    requestSentiment(analUrl)
    .then(res => res.json())
    .then((res) => {
        console.log(res);
        let analysis = `The tone of <p>${res.text}</p> is ${res.polarity} with a ${res.subjectivity} view`;
        document.getElementById('results').innerHTML = analysis;
    });
}

export { handleSubmit }
