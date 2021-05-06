const solution = require('./index');

test('should be a function', () => {
  expect(typeof solution).toEqual('function');
});

test('should return the correct result', () => {
  const result = solution('[]{[()]}()');
  expect(result).toEqual(1);
});

test('should return the correct result', () => {
  const result = solution('[]{[(]}()');
  expect(result).toEqual(0);
});

test('should return the correct result', () => {
  const result = solution('');
  expect(result).toEqual(1);
});

test('should return the correct result', () => {
  const result = solution('()');
  expect(result).toEqual(1);
});

test('should return the correct result', () => {
  const result = solution('(][)');
  expect(result).toEqual(0);
});

test('should return the correct result', () => {
  const result = solution('[]{[]}()');
  expect(result).toEqual(1);
});

test('should return the correct result', () => {
  const result = solution('{[([{({{[[((((({{{{{}}}}})))))]]}})}(){}])]}');
  expect(result).toEqual(1);
});
