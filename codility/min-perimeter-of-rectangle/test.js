const solution = require('./index');

test('should be a function', () => {
  expect(typeof solution).toEqual('function');
});

test('should return the correct result', () => {
  const result = solution(30);
  expect(result).toEqual(22);
});

test('should return the correct result', () => {
  const result = solution(100);
  expect(result).toEqual(40);
});

test('should return the correct result', () => {
  const result = solution(80);
  expect(result).toEqual(36);
});

test('should return the correct result', () => {
  const result = solution(1);
  expect(result).toEqual(4);
});

test('should return the correct result', () => {
  const result = solution(2);
  expect(result).toEqual(6);
});
