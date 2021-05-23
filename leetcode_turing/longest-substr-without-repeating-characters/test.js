const lengthOfLongestSubstring = require('./index');

test('should be a function', () => {
  expect(typeof lengthOfLongestSubstring).toEqual('function');
});

test('should return the correct result', () => {
  const result = lengthOfLongestSubstring('abcabcbb');
  expect(result).toEqual(3);
});

test('should return the correct result', () => {
  const result = lengthOfLongestSubstring('bbbbb');
  expect(result).toEqual(1);
});

test('should return the correct result', () => {
  const result = lengthOfLongestSubstring('pwwkew');
  expect(result).toEqual(3);
});

test('should return the correct result', () => {
  const result = lengthOfLongestSubstring('dvdf');
  expect(result).toEqual(3);
});
