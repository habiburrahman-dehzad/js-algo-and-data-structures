const solution = require('./index');

test('should be a function', () => {
  expect(typeof solution).toEqual('function');
});

test('should return the correct result', () => {
  const result = solution(24);
  expect(result).toEqual(8);
});

test('should return the correct result', () => {
  const result = solution(1245);
  expect(result).toEqual(8);
});
