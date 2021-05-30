const intToRoman = require('./index');

test('should be a function', () => {
  expect(typeof intToRoman).toEqual('function');
});

test('should return the correct result', () => {
  const result = intToRoman(3);
  expect(result).toEqual('III');
});

test('should return the correct result', () => {
  const result = intToRoman(4);
  expect(result).toEqual('IV');
});

test('should return the correct result', () => {
  const result = intToRoman(9);
  expect(result).toEqual('IX');
});

test('should return the correct result', () => {
  const result = intToRoman(7);
  expect(result).toEqual('VII');
});

test('should return the correct result', () => {
  const result = intToRoman(58);
  expect(result).toEqual('LVIII');
});

test('should return the correct result', () => {
  const result = intToRoman(1994);
  expect(result).toEqual('MCMXCIV');
});

test('should return the correct result', () => {
  const result = intToRoman(3998);
  expect(result).toEqual('MMMCMXCVIII');
});

test('should return the correct result', () => {
  const result = intToRoman(3908);
  expect(result).toEqual('MMMCMVIII');
});
