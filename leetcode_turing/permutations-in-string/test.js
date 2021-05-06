const checkInclusion = require('./index');

test('should be a function', () => {
  expect(typeof checkInclusion).toEqual('function');
});

test('should return the correct result', () => {
  const result = checkInclusion('ab', 'eidbaooo');
  expect(result).toEqual(true);
});

test('should return the correct result', () => {
  const result = checkInclusion('ab', 'eidboaoo');
  expect(result).toEqual(false);
});

test('should return the correct result', () => {
  const result = checkInclusion('ab', 'eidboaooba');
  expect(result).toEqual(true);
});

test('should return the correct result', () => {
  const result = checkInclusion('abcd', 'cbda');
  expect(result).toEqual(true);
});

test('should return the correct result', () => {
  const result = checkInclusion('jshaja', 'jshaj');
  expect(result).toEqual(false);
});

test('should return the correct result', () => {
  const result = checkInclusion('a', 'a');
  expect(result).toEqual(true);
});

test('should return the correct result', () => {
  const result = checkInclusion('ab', 'ba');
  expect(result).toEqual(true);
});

test('should return the correct result', () => {
  const result = checkInclusion('a', 'c');
  expect(result).toEqual(false);
});
