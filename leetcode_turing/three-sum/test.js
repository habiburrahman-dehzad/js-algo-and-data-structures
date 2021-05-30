const threeSum = require('./index');

test('should be a function', () => {
  expect(typeof threeSum).toEqual('function');
});

test('should return the correct result', () => {
  const result = threeSum([-1, 0, 1, 2, -1, -4]);
  expect(result).toEqual([
    [-1, -1, 2],
    [-1, 0, 1],
  ]);
});

test('should return the correct result', () => {
  const result = threeSum([]);
  expect(result).toEqual([]);
});

test('should return the correct result', () => {
  const result = threeSum([0]);
  expect(result).toEqual([]);
});

test('should return the correct result', () => {
  const result = threeSum([-2, 0, 1, 2, -1, -4, -2, 5, -3, 6]);
  expect(result).toEqual([
    [-4, -2, 6],
    [-4, -1, 5],
    [-3, -2, 5],
    [-3, 1, 2],
    [-2, 0, 2],
    [-1, 0, 1],
  ]);
});
