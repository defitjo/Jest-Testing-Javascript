const capitalize = require('./capitalize-string');

test('first letter capitalized', () => {
  expect(capitalize('javascript')).toBe('Javascript');
});