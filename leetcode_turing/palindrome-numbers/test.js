const isPalindrome = require('./index');

test('should be a function', () => {
  expect(typeof isPalindrome).toEqual('function');
});

test('should return the correct result', () => {
  const result = isPalindrome(121);
  expect(result).toEqual(true);
});

test('should return the correct result', () => {
  const result = isPalindrome(-121);
  expect(result).toEqual(false);
});

test('should return the correct result', () => {
  const result = isPalindrome(5);
  expect(result).toEqual(true);
});

test('should return the correct result', () => {
  const result = isPalindrome(-787);
  expect(result).toEqual(false);
});

test('should return the correct result', () => {
  const result = isPalindrome(12345654321);
  expect(result).toEqual(true);
});

test('should return the correct result', () => {
  const result = isPalindrome(10);
  expect(result).toEqual(false);
});

test('should return the correct result', () => {
  const result = isPalindrome(-101);
  expect(result).toEqual(false);
});

test('should return the correct result', () => {
  const result = isPalindrome(87123766732178);
  expect(result).toEqual(true);
});
