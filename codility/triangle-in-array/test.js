const solution = require('./index');

test('should be a function', () => {
  expect(typeof solution).toEqual('function');
});

test('should return the correct result', () => {
  const result = solution([10, 2, 5, 1, 8, 20]);
  expect(result).toEqual(1);
});

test('should return the correct result', () => {
  const result = solution([10, 2, 4, 1, 6, 20]);
  expect(result).toEqual(0);
});

test('should return the correct result', () => {
  const result = solution([1]);
  expect(result).toEqual(0);
});

test('should return the correct result', () => {
  const result = solution([10, 2, 5, 1, 8, 20]);
  expect(result).toEqual(1);
});

test('should return the correct result', () => {
  const result = solution([9, 2, 5, 1, 8, 20]);
  expect(result).toEqual(1);
});

test('should return the correct result', () => {
  const result = solution([10, 5, 8]);
  expect(result).toEqual(1);
});
