const romanToInt = require('./index');

test('should be a function', () => {
  expect(typeof romanToInt).toEqual('function');
});

test('should return the correct result', () => {
  const result = romanToInt('III');
  expect(result).toEqual(3);
});

test('should return the correct result', () => {
  const result = romanToInt('IV');
  expect(result).toEqual(4);
});

test('should return the correct result', () => {
  const result = romanToInt('IX');
  expect(result).toEqual(9);
});

test('should return the correct result', () => {
  const result = romanToInt('LVIII');
  expect(result).toEqual(58);
});

test('should return the correct result', () => {
  const result = romanToInt('MCMXCIV');
  expect(result).toEqual(1994);
});
