const solution = require('./index');

test('should be a function', () => {
  expect(typeof solution).toEqual('function');
});

test('should return the correct result', () => {
  const result = solution(['pim', 'pom'], ['999999999', '777888999'], '88999');
  expect(result).toEqual('pom');
});

test('should return the correct result', () => {
  const result = solution(
    ['sander', 'amy', 'ann', 'michael'],
    ['123456789', '234567890', '789123456', '123123123'],
    '1'
  );
  expect(result).toEqual('ann');
});

test('should return the correct result', () => {
  const result = solution(
    ['adam', 'eva', 'leo'],
    ['121212121', '111111111', '444555666'],
    '112'
  );
  expect(result).toEqual('NO CONTACT');
});

test('should return the correct result', () => {
  const result = solution(
    ['b', 'a', 'c'],
    ['678234987', '123456789', '192823746'],
    '23'
  );
  expect(result).toEqual('a');
});
