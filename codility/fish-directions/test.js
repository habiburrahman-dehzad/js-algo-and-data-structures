const solution = require('./index');

test('should be a function', () => {
  expect(typeof solution).toEqual('function');
});

test('should return the correct result', () => {
  const result = solution([4, 3, 2, 1, 5], [0, 1, 0, 0, 0]);

  expect(result).toEqual(2);
});

test('should return the correct result', () => {
  const result = solution([3], [0]);

  expect(result).toEqual(1);
});

test('should return the correct result', () => {
  const result = solution([3, 5, 4, 1, 2, 6, 8, 7], [0, 1, 0, 1, 0, 1, 0, 1]);

  expect(result).toEqual(3);
});

test('should return the correct result', () => {
  const result = solution([3, 5, 4, 1, 2, 6, 8, 7], [0, 0, 0, 0, 0, 0, 0, 0]);

  expect(result).toEqual(8);
});

test('should return the correct result', () => {
  const result = solution([3, 5, 4, 1, 2, 6, 8, 7], [1, 1, 1, 1, 1, 1, 1, 1]);

  expect(result).toEqual(8);
});

test('should return the correct result', () => {
  const result = solution([3, 5], [1, 0]);

  expect(result).toEqual(1);
});
