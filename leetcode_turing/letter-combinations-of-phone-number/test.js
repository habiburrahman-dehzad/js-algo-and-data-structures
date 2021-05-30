const letterCombinations = require('./index');

test('should be a function', () => {
  expect(typeof letterCombinations).toEqual('function');
});

test('should return the correct result', () => {
  const result = letterCombinations('23');
  expect(result).toEqual([
    'ad',
    'ae',
    'af',
    'bd',
    'be',
    'bf',
    'cd',
    'ce',
    'cf',
  ]);
});

test('should return the correct result', () => {
  const result = letterCombinations('');
  expect(result).toEqual([]);
});

test('should return the correct result', () => {
  const result = letterCombinations('2');
  expect(result).toEqual(['a', 'b', 'c']);
});
