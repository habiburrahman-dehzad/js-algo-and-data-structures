const threeSumClosest = require('./index');

test('should be a function', () => {
  expect(typeof threeSumClosest).toEqual('function');
});

test('should return the correct result', () => {
  const result = threeSumClosest([-1, 2, 1, -4], 1);
  expect(result).toEqual(2);
});

test('should return the correct result', () => {
  const result = threeSumClosest([-2, -5, 1, 9, 7, 2, 12], 6);
  expect(result).toEqual(6);
});

test('should return the correct result', () => {
  const result = threeSumClosest([-2, -5, -1, -9, -7, -2, -12], -6);
  expect(result).toEqual(-5);
});

test('should return the correct result', () => {
  const result = threeSumClosest([0, 2, 1, -3], 1);
  expect(result).toEqual(0);
});
