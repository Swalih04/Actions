const { add, divide } = require('../src/index');

test('adds numbers', () => {
  expect(add(2, 3)).toBe(5);
});

test('divide by zero', () => {
  expect(divide(10, 0)).toBe(null);
});
