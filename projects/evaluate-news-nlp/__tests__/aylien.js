var t = require('../src/server/aylien.js')

test('sentiment is positive', () => {
    return t.getSentiment('yay').then(data => {
      expect(data.polarity).toBe('positive');
    });
  });
