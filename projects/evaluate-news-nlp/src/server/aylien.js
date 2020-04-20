var aylien = require("aylien_textapi");
const dotenv = require('dotenv');
dotenv.config();

// set aylien API credentias
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
  });

async function getSentiment(text) {
    resp = await textapi.sentiment({'text': text}, (err, resp) => {
        // TODO: insert into document
        return resp;
    });
}

exports.getSentiment = getSentiment;