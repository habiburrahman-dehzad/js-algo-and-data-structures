const solution = require('./index');

test('should be a function', () => {
  expect(typeof solution).toEqual('function');
});

test('should return the correct result', () => {
  const result = solution([4, 3, 4, 4, 4, 2]);
  expect(result).toEqual(2);
});

test('should return the correct result', () => {
  const result = solution([3, 4, 4, 4, 4, 2]);
  expect(result).toEqual(1);
});

test('should return the correct result', () => {
  const result = solution([3]);
  expect(result).toEqual(0);
});

test('should return the correct result', () => {
  const result = solution([4, 4]);
  expect(result).toEqual(1);
});

test('should return the correct result', () => {
  const result = solution([3, 4, 3, 2, 3, -1, 3, 3]);
  expect(result).toEqual(4);
});

test('should return the correct result', () => {
  const result = solution([5, 4, 3, 2, 6, -1, 3, 3]);
  expect(result).toEqual(0);
});

test('should return the correct result', () => {
  const result = solution([1, 1, 1, 1, 1, 1, 1, 1]);
  expect(result).toEqual(7);
});

test('should return the correct result', () => {
  const result = solution([]);
  expect(result).toEqual(0);
});

test('should return the correct result', () => {
  const result = solution([5]);
  expect(result).toEqual(0);
});

test('should return the correct result', () => {
  const result = solution([5, 5]);
  expect(result).toEqual(1);
});

test('should return the correct result', () => {
  const result = solution([5, 4]);
  expect(result).toEqual(0);
});

test('should return the correct result', () => {
  const result = solution([5, 5, 5, 5, 5, 5, 5, 4, 6, 3, 2, -50, 4]);
  expect(result).toEqual(0);
});

test('should return the correct result', () => {
  const result = solution([4, 6, 3, 2, -50, 4, 5, 5, 5, 5, 5, 5, 5]);
  expect(result).toEqual(0);
});
