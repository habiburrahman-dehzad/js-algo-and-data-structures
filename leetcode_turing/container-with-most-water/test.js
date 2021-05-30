const maxArea = require('./index');

test('should be a function', () => {
  expect(typeof maxArea).toEqual('function');
});

test('should return the correct result', () => {
  const result = maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
  expect(result).toEqual(49);
});

test('should return the correct result', () => {
  const result = maxArea([1, 1]);
  expect(result).toEqual(1);
});

test('should return the correct result', () => {
  const result = maxArea([4, 3, 2, 1, 4]);
  expect(result).toEqual(16);
});

test('should return the correct result', () => {
  const result = maxArea([1, 2, 1]);
  expect(result).toEqual(2);
});

test('should return the correct result', () => {
  const result = maxArea([1, 2, 1, 2, 1, 2, 14, 2, 14, 2, 1, 2, 1, 2]);
  expect(result).toEqual(28);
});
