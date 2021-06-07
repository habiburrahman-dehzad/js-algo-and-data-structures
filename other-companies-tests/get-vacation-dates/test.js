const solution = require('./index');

test('should be a function', () => {
  expect(typeof solution).toEqual('function');
});

test('should give the correct result', () => {
  const result = solution(2014, 'April', 'May', 'Wednesday');
  expect(result).toEqual(7);
});

test('should give the correct result', () => {
  const result = solution(2014, 'June', 'July', 'Wednesday');
  expect(result).toEqual(8);
});

test('should give the correct result', () => {
  const result = solution(2014, 'September', 'October', 'Wednesday');
  expect(result).toEqual(8);
});

test('should give the correct result', () => {
  const result = solution(2014, 'May', 'July', 'Wednesday');
  expect(result).toEqual(12);
});

test('should give the correct result', () => {
  const result = solution(2015, 'May', 'June', 'Thursday');
  expect(result).toEqual(8);
});

test('should give the correct result', () => {
  const result = solution(2015, 'June', 'September', 'Thursday');
  expect(result).toEqual(17);
});

test('should give the correct result', () => {
  const result = solution(2015, 'January', 'February', 'Thursday');
  expect(result).toEqual(7);
});

test('should give the correct result', () => {
  const result = solution(2016, 'January', 'March', 'Friday');
  expect(result).toEqual(12);
});
