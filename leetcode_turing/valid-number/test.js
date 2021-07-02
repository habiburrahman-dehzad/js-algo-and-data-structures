const isNumber = require('./index');

test('should be a function', () => {
  expect(typeof isNumber).toEqual('function');
});

test('should return true for all valid numbers', () => {
  let result = [
    '2',
    '0089',
    '-0.1',
    '+3.14',
    '4.',
    '-.9',
    '2e10',
    '-90E3',
    '3e+7',
    '+6e-1',
    '53.5e93',
    '-123.456e789',
    '.2e23',
    '-.3e+24',
  ].map((n) => isNumber(n));

  result.forEach((res) => expect(res).toEqual(true));
});

test('should return false for all invalid numbers', () => {
  result = [
    'abc',
    '1a',
    '1e',
    'e3',
    '99e2.5',
    '--6',
    '-+3',
    '23e-',
    '43E+',
    '95a54e53',
    '23ee10',
    '24EE34',
    '.',
    '',
    '.-4',
    '-.',
    '.+',
    '+.+',
    '-.+',
    '+.-',
    '.e+',
    '.e23',
    '.e+24',
    '56+.84473',
    'inifinity',
    'Infinity',
  ].map((n) => isNumber(n));

  result.forEach((res) => expect(res).toEqual(false));
});
