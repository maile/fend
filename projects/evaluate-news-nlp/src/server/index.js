var path = require('path')
const express = require('express')
const aylien = require('./aylien.js')
var bodyParser = require('body-parser')
var cors = require('cors')

const app = express()
app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})
app.post('/', function (req, res) {
    console.log("received unhandled post request", req.body);
})

app.post('/sentiment', (req, res) => {
    var url = req.body['url'];
    console.log('handling sentiment request for ', url);
    aylien.getSentiment(url)
    .then((sent) => {
        res.send(sent.json());
    })
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})
