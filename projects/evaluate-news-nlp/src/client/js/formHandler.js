import { requestSentiment } from "./NLPClient";

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let analUrl = document.getElementById('anal_url').value

    // TODO: check we got a url

    console.log("analysing " + analUrl + "....");
    requestSentiment(analUrl)
    .then(res => res.json())
    .then(res => console.log(res));
/*
    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
    */
}

export { handleSubmit }
