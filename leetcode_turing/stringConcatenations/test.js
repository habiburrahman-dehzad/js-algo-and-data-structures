const { findSubstring } = require('./index');

test('should be a function', () => {
  expect(typeof findSubstring).toEqual('function');
});

test('should return an arry of two integers', () => {
  const result = findSubstring('barfoothefoobarman', ['foo', 'bar']);
  expect(result).toHaveLength(2);
  expect(result).toContain(0);
  expect(result).toContain(9);
});

test('should return an arry of two integers', () => {
  const result = findSubstring('dadcdaad', ['da', 'dc']);
  expect(result).toHaveLength(2);
  expect(result).toContain(0);
  expect(result).toContain(2);
});

test('should return an empty array', () => {
  const result = findSubstring('wordgoodgoodgoodbestword', [
    'word',
    'good',
    'best',
    'word',
  ]);
  expect(result).toHaveLength(0);
});

test('should return an arry of three integers', () => {
  const result = findSubstring('barfoofoobarthefoobarman', [
    'bar',
    'foo',
    'the',
  ]);
  expect(result).toContain(6);
  expect(result).toContain(9);
  expect(result).toContain(12);
});

test('should return an arry of one integer', () => {
  const result = findSubstring('a', ['a']);
  expect(result).toHaveLength(1);
  expect(result).toContain(0);
});

test('should return an arry of one integer', () => {
  const result = findSubstring('bccbcc', ['bc', 'cc', 'cb']);
  expect(result).toHaveLength(1);
  expect(result).toContain(0);
});

test('should return the correct arry of integers', () => {
  const result = findSubstring('bcabbcaabbccacacbabccacaababcbb', [
    'c',
    'b',
    'a',
    'c',
    'a',
    'a',
    'a',
    'b',
    'c',
  ]);
  // [6,16,17,18,19,20]
  expect(result).toHaveLength(6);
  expect(result).toContain(6);
  expect(result).toContain(16);
  expect(result).toContain(17);
  expect(result).toContain(18);
  expect(result).toContain(19);
  expect(result).toContain(20);
});
