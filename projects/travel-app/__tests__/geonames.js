var t = require('../src/server/geonames.js')

test('paris, france translates to correct country info', () => {
    return t.search('paris, france').then(data => {
      expect(data.countryCode).toBe('FR');
      expect(data.name).toBe('Paris');
      expect(data.lng).toBe('2.3488');
      expect(data.lat).toBe('48.85341');
    });
  });
