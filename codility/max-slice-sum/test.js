const solution = require('./index');

test('should be a function', () => {
  expect(typeof solution).toEqual('function');
});

test('should return the correct result', () => {
  const result = solution([3, 2, -6, 4, 0]);
  expect(result).toEqual(5);
});

test('should return the correct result', () => {
  const result = solution([-3, -2, -6, -4, -10, -20, -1]);
  expect(result).toEqual(-1);
});

test('should return the correct result', () => {
  const result = solution([-3, -2, -6, 0, -10, -20, -1]);
  expect(result).toEqual(0);
});

test('should return the correct result', () => {
  const result = solution([2, 2, 2, 2, 2, 2, 2, 2, 2]);
  expect(result).toEqual(18);
});

test('should return the correct result', () => {
  const result = solution([2, 5, 2, 9, 2, 10, 2, 20, 2]);
  expect(result).toEqual(54);
});

test('should return the correct result', () => {
  const result = solution([2, 5, -20, 9, 2, 10, -10, 20, -2]);
  expect(result).toEqual(31);
});

test('should return the correct result', () => {
  const result = solution([2, 5, -2, 9, 2, 10, -2, 20, 2]);
  expect(result).toEqual(46);
});
