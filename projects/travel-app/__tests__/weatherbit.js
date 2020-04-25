var t = require('../src/server/weatherbit.js')

test('paris, france weather on 2019-05-10', () => {
    return t.getForecast('2028-05-10', '48.855', '2.3488').then(x => {
        expect(x.high).toBe(62.6);
        expect(x.low).toBe(49.3);
        expect(x.desc).toBe('fine');
    });
});