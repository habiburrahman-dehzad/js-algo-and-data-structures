const trap = require('./index');

test('should be a function', () => {
  expect(typeof trap).toEqual('function');
});

test('should return the correct result', () => {
  const result = trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
  expect(result).toEqual(6);
});

test('should return the correct result', () => {
  const result = trap([4, 2, 0, 3, 2, 5]);
  expect(result).toEqual(9);
});
