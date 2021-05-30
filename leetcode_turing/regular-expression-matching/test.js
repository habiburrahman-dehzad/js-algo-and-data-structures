const isMatch = require('./index');

test('should be a function', () => {
  expect(typeof isMatch).toEqual('function');
});

test('should return the correct result', () => {
  const result = isMatch('aa', 'a');
  expect(result).toEqual(false);
});

test('should return the correct result', () => {
  const result = isMatch('aa', 'a*');
  expect(result).toEqual(true);
});

test('should return the correct result', () => {
  const result = isMatch('ab', '.*');
  expect(result).toEqual(true);
});

test('should return the correct result', () => {
  const result = isMatch('aab', 'c*a*b');
  expect(result).toEqual(true);
});

test('should return the correct result', () => {
  const result = isMatch('mississippi', 'mis*is*p*.');
  expect(result).toEqual(false);
});
