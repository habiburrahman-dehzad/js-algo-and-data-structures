const fourSum = require('./index');

test('should be a function', () => {
  expect(typeof fourSum).toEqual('function');
});

test('should return the correct result', () => {
  const result = fourSum([1, 0, -1, 0, -2, 2], 0);
  expect(result).toEqual([
    [-2, -1, 1, 2],
    [-2, 0, 0, 2],
    [-1, 0, 0, 1],
  ]);
});

test('should return the correct result', () => {
  const result = fourSum([9, 5, 0, 0, -2, 2], 0);
  expect(result).toEqual([[-2, 0, 0, 2]]);
});

test('should return the correct result', () => {
  const result = fourSum([1, 5, 10, 12, 109, 32, 0, 0, 0, 0], 0);
  expect(result).toEqual([[0, 0, 0, 0]]);
});

test('should return the correct result', () => {
  const result = fourSum([-3, -1, 0, 2, 4, 5], 0);
  expect(result).toEqual([[-3, -1, 0, 4]]);
});

test('should return the correct result', () => {
  const result = fourSum([-3, -1, 0, 2, 4, 5], 2);
  expect(result).toEqual([[-3, -1, 2, 4]]);
});

test('should return the correct result', () => {
  const result = fourSum([2, 2, 2, 2, 2], 8);
  expect(result).toEqual([[2, 2, 2, 2]]);
});

test('should return the correct result', () => {
  const result = fourSum([-3, -2, -1, 0, 0, 1, 2, 3], 0);
  expect(result).toEqual([
    [-3, -2, 2, 3],
    [-3, -1, 1, 3],
    [-3, 0, 0, 3],
    [-3, 0, 1, 2],
    [-2, -1, 0, 3],
    [-2, -1, 1, 2],
    [-2, 0, 0, 2],
    [-1, 0, 0, 1],
  ]);
});
