const getPermutation = require('./index');

test('should be a function', () => {
  expect(typeof getPermutation).toEqual('function');
});

test('should return the correct result', () => {
  const result = getPermutation(3, 3);
  expect(result).toEqual('213');
});

test('should return the correct result', () => {
  const result = getPermutation(4, 9);
  expect(result).toEqual('2314');
});

test('should return the correct result', () => {
  const result = getPermutation(3, 1);
  expect(result).toEqual('123');
});

test('should return the correct result', () => {
  const result = getPermutation(1, 1);
  expect(result).toEqual('1');
});
