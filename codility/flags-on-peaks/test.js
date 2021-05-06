const solution = require('./index');

test('should be a function', () => {
  expect(typeof solution).toEqual('function');
});

test('should return the correct result', () => {
  const result = solution([1, 5, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]);
  expect(result).toEqual(3);
});

test('should return the correct result', () => {
  const result = solution([1, 3, 2, 4, 3, 6, 3, 8, 2, 2, 2, 2, 2, 9, 3]);
  expect(result).toEqual(3);
});

test('should return the correct result', () => {
  const result = solution([1, 3, 2, 4, 3, 6, 3, 8, 2, 8, 2, 10, 2, 9, 3]);
  expect(result).toEqual(4);
});

test('should return the correct result', () => {
  const result = solution([1, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 9, 3]);
  expect(result).toEqual(2);
});

test('should return the correct result', () => {
  const result = solution([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]);
  expect(result).toEqual(0);
});

test('should return the correct result', () => {
  const result = solution([
    2,
    4,
    2,
    4,
    2,
    4,
    2,
    4,
    2,
    4,
    2,
    4,
    2,
    4,
    2,
    4,
    2,
    4,
    2,
    4,
    2,
    4,
    2,
    4,
    2,
    4,
    2,
  ]);
  expect(result).toEqual(5);
});
