const fetch = require('node-fetch');
var t = require('../src/client/js/NLPClient.js');
import "isomorphic-fetch";

test('POST function works', () => {
    return t.postData('https://postman-echo.com/post', {'data': 'hello'})
    .then(data => data.json())
    .then(data => {
        expect(data.data.data).toBe('hello');
    }).catch(err => console.log(err));
});