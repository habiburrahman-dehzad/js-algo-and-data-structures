const myAtoi = require('./index');

test('should be a function', () => {
  expect(typeof myAtoi).toEqual('function');
});

test('should return the correct result', () => {
  const result = myAtoi('42');
  expect(result).toEqual(42);
});

test('should return the correct result', () => {
  const result = myAtoi('   -42');
  expect(result).toEqual(-42);
});

test('should return the correct result', () => {
  const result = myAtoi('4193 with words');
  expect(result).toEqual(4193);
});

test('should return the correct result', () => {
  const result = myAtoi('words and 987');
  expect(result).toEqual(0);
});

test('should return the correct result', () => {
  const result = myAtoi('-91283472332');
  expect(result).toEqual(-2147483648);
});

test('should return the correct result', () => {
  const result = myAtoi('91283472332');
  expect(result).toEqual(2147483647);
});

test('should return the correct result', () => {
  const result = myAtoi('21474836460');
  expect(result).toEqual(2147483647);
});
