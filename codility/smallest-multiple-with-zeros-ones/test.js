const solution = require('./index');

test('should be a function', () => {
  expect(typeof solution).toEqual('function');
});

test('should return the correct result', () => {
  const result = solution(4);
  expect(result).toEqual('100');
});

test('should return the correct result', () => {
  const result = solution(8);
  expect(result).toEqual('1000');
});

test('should return the correct result', () => {
  const result = solution(5);
  expect(result).toEqual('10');
});

test('should return the correct result', () => {
  const result = solution(18);
  expect(result).toEqual('1111111110');
});
