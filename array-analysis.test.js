const arrayAnalysis = require('./array-analysis');
const myArray = arrayAnalysis([1, 2, 3]);

test('equals smallest number in an array', () => {
  expect(myArray.min).toBe(1);
});

test('equals largest number in an array', () => {
  expect(myArray.max).toBe(3);
});

test('equals the length of an array', () => {
  expect(myArray.length).toBe(3);
});

test('equals the average of an array', () => {
  expect(myArray.average).toBe(2);
});