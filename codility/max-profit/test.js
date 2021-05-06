const solution = require('./index');

test('should be a function', () => {
  expect(typeof solution).toEqual('function');
});

test('should return the correct result', () => {
  const result = solution([23171, 21011, 21123, 21366, 21013, 21367]);
  expect(result).toEqual(356);
});

test('should return the correct result', () => {
  const result = solution([23171, 21000, 21123, 25300, 20010, 21360]);
  expect(result).toEqual(4300);
});

test('should return the correct result', () => {
  const result = solution([]);
  expect(result).toEqual(0);
});

test('should return the correct result', () => {
  const result = solution([23171]);
  expect(result).toEqual(0);
});

test('should return the correct result', () => {
  const result = solution([23171, 21000]);
  expect(result).toEqual(0);
});

test('should return the correct result', () => {
  const result = solution([21000, 25300]);
  expect(result).toEqual(4300);
});

test('should return the correct result', () => {
  const result = solution([23171, 23000, 22900, 22800, 22700, 22600]);
  expect(result).toEqual(0);
});

test('should return the correct result', () => {
  const result = solution([
    23171,
    23000,
    22900,
    22800,
    22700,
    22600,
    20000,
    30000,
  ]);
  expect(result).toEqual(10000);
});
