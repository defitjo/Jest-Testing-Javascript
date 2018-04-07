const calculator = require('./calculator');

// Tests using Class
test('add 1 + 2 to equal 3', () => {
  test = new calculator();
  expect(test.add(1, 2)).toBe(3);
});

test('subtract 2 - 1 to equal 1', () => {
  test = new calculator();
  expect(test.subtract(2, 1)).toBe(1);
});

test('multiply 2 * 2 to equal 4', () => {
  test = new calculator();
  expect(test.multiply(2, 2)).toBe(4);
});

test('divide 2 / 2 to equal 1', () => {
  test = new calculator();
  expect(test.divide(2, 2)).toBe(1);
});

/*
//Tests using factory functions
test('add 1 + 2 to equal 3', () => {
  test = calculator();
  expect(test.add(1, 2)).toBe(3);
});

test("subtract 2 - 1 to equal 1", () => {
  test = calculator();
  expect(test.subtract(2, 1)).toBe(1);
});

test("multiply 2 * 2 to equal 4", () => {
  test = calculator();
  expect(test.multiply(2, 2)).toBe(4);
});

test("divide 2 / 2 to equal 1", () => {
  test = calculator();
  expect(test.divide(2, 2)).toBe(1);
}); */
