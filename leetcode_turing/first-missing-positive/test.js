const firstMissingPositive = require('./index');

test('should be a function', () => {
  expect(typeof firstMissingPositive).toEqual('function');
});

test('should return the correct result', () => {
  const result = firstMissingPositive([1, 2, 0]);
  expect(result).toEqual(3);
});

test('should return the correct result', () => {
  const result = firstMissingPositive([3, 4, -1, 1]);
  expect(result).toEqual(2);
});

test('should return the correct result', () => {
  const result = firstMissingPositive([7, 8, 9, 11, 12]);
  expect(result).toEqual(1);
});

test('should return the correct result', () => {
  const result = firstMissingPositive([-2, -3, -9, -5, 0, 2]);
  expect(result).toEqual(1);
});

test('should return the correct result', () => {
  const result = firstMissingPositive([]);
  expect(result).toEqual(1);
});

test('should return the correct result', () => {
  const result = firstMissingPositive([0]);
  expect(result).toEqual(1);
});

test('should return the correct result', () => {
  const result = firstMissingPositive([-5]);
  expect(result).toEqual(1);
});
