const palindromePairs = require('./index');

test('should be a function', () => {
  expect(typeof palindromePairs).toEqual('function');
});

test('should return the correct result', () => {
  const result = palindromePairs(['abcd', 'dcba', 'lls', 's', 'sssll']);
  expect(result).toEqual([
    [0, 1],
    [1, 0],
    [3, 2],
    [2, 4],
  ]);
});

test('should return the correct result', () => {
  const result = palindromePairs(['bat', 'tab', 'cat']);
  expect(result).toEqual([
    [0, 1],
    [1, 0],
  ]);
});

test('should return the correct result', () => {
  const result = palindromePairs(['a', '']);
  expect(result).toEqual([
    [0, 1],
    [1, 0],
  ]);
});
