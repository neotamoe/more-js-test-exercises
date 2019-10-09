const sum = require('../modules/sum.js')

test('adds 1 + 2 to equal 3', function() {
  expect(sum(1, 2)).toBe(3);
});

test('adds 1 + -3 to equal -2', () => {
  expect(sum(1,-3)).toBe(-2);
});

test('adds 0 + 1234 to equal 1234', () => {
  expect(sum(0,1234)).toBe(1234);
});

test('adds 99 + 1 to equal 100', () => {
  expect(sum(99,1)).toBe(100);
})
