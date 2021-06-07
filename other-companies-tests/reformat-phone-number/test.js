const solution = require('./index');

test('should be a function', () => {
  expect(typeof solution).toEqual('function');
});

test('should return the correct result', () => {
  const result = solution('00-44  48 5555 8361');
  expect(result).toEqual('004-448-555-583-61');
});

test('should return the correct result', () => {
  const result = solution('0   22  48 5555 8361');
  expect(result).toEqual('022-485-555-83-61');
});

test('should return the correct result', () => {
  const result = solution('0   22  48 555 8361');
  expect(result).toEqual('022-485-558-361');
});
