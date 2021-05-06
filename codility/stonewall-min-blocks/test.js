const solution = require('./index');

test('should be a function', () => {
  expect(typeof solution).toEqual('function');
});

test('should return the correct result', () => {
  const result = solution([5]);
  expect(result).toEqual(1);
});

test('should return the correct result', () => {
  const result = solution([8, 8, 5, 7, 9, 8, 7, 4, 8]);
  expect(result).toEqual(7);
});

test('should return the correct result', () => {
  const result = solution([
    9,
    8,
    8,
    9,
    3,
    5,
    2,
    8,
    7,
    7,
    9,
    1,
    2,
    3,
    4,
    3,
    3,
    2,
  ]);
  expect(result).toEqual(13);
});

test('should return the correct result', () => {
  const result = solution([8, 8, 8, 8, 8, 8, 8]);
  expect(result).toEqual(1);
});

test('should return the correct result', () => {
  const result = solution([8, 9, 9, 9, 9, 8, 8]);
  expect(result).toEqual(2);
});

test('should return the correct result', () => {
  const result = solution([1, 2, 3, 4, 5, 4, 3, 2, 1]);
  expect(result).toEqual(5);
});

test('should return the correct result', () => {
  const result = solution([1, 3, 3, 4, 5, 4, 3, 3, 1]);
  expect(result).toEqual(4);
});
