const fetch = require('node-fetch');
var t = require('../src/client/js/travelInfo.js');
import "isomorphic-fetch";
import { advanceTo, clear } from 'jest-date-mock';

test('POST function works', () => {
    return t.postData('https://postman-echo.com/post', {'data': 'hello'})
    .then(data => data.json())
    .then(data => {
        expect(data.data.data).toBe('hello');
    }).catch(err => console.log(err));
});

test('daysUntil', () => {
    advanceTo(new Date('2020-05-03'));
    let until = t.daysUntil('2020-05-10');
    expect(until).toBe(7);
    clear();
});