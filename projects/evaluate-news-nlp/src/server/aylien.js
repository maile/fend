var aylien = require("aylien_textapi");
const util = require('util')
const dotenv = require('dotenv');
dotenv.config();

// set aylien API credentias
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
  });

async function getSentiment(text) {
    // maybe just do https://github.com/coinbase/coinbase-node/issues/59#issuecomment-354531138
    var sentiment = util.promisify(textapi.sentiment).bind(textapi);
    return sentiment({'text': text});
}

exports.getSentiment = getSentiment;