const convert = require('./index');

test('should be a function', () => {
  expect(typeof convert).toEqual('function');
});

test('should return the correct result', () => {
  const result = convert('PAYPALISHIRING', 3);
  expect(result).toEqual('PAHNAPLSIIGYIR');
});

test('should return the correct result', () => {
  const result = convert('PAYPALISHIRING', 4);
  expect(result).toEqual('PINALSIGYAHRPI');
});

test('should return the correct result', () => {
  const result = convert('A', 1);
  expect(result).toEqual('A');
});

test('should return the correct result', () => {
  const result = convert('A', 100);
  expect(result).toEqual('A');
});
