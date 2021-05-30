const numberToWords = require('./index');

test('should be a function', () => {
  expect(typeof numberToWords).toEqual('function');
});

test('should return the correct result', () => {
  const result = numberToWords(123);
  expect(result).toEqual('One Hundred Twenty Three');
});

test('should return the correct result', () => {
  const result = numberToWords(101);
  expect(result).toEqual('One Hundred One');
});

test('should return the correct result', () => {
  const result = numberToWords(1001);
  expect(result).toEqual('One Thousand One');
});

test('should return the correct result', () => {
  const result = numberToWords(1000001);
  expect(result).toEqual('One Million One');
});

test('should return the correct result', () => {
  const result = numberToWords(12345);
  expect(result).toEqual('Twelve Thousand Three Hundred Forty Five');
});

test('should return the correct result', () => {
  const result = numberToWords(1234567);
  expect(result).toEqual(
    'One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven'
  );
});

test('should return the correct result', () => {
  const result = numberToWords(1234567891);
  expect(result).toEqual(
    'One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One'
  );
});

test('should return the correct result', () => {
  const result = numberToWords(0);
  expect(result).toEqual('Zero');
});

test('should return the correct result', () => {
  const result = numberToWords(1);
  expect(result).toEqual('One');
});

test('should return the correct result', () => {
  const result = numberToWords(6);
  expect(result).toEqual('Six');
});

test('should return the correct result', () => {
  const result = numberToWords(11);
  expect(result).toEqual('Eleven');
});

test('should return the correct result', () => {
  const result = numberToWords(10);
  expect(result).toEqual('Ten');
});

test('should return the correct result', () => {
  const result = numberToWords(20);
  expect(result).toEqual('Twenty');
});

test('should return the correct result', () => {
  const result = numberToWords(30);
  expect(result).toEqual('Thirty');
});

test('should return the correct result', () => {
  const result = numberToWords(5197234768);
  expect(result).toEqual(
    'Five Billion One Hundred Ninety Seven Million Two Hundred Thirty Four Thousand Seven Hundred Sixty Eight'
  );
});

test('should return the correct result', () => {
  const result = numberToWords(3295197234768);
  expect(result).toEqual(
    'Three Trillion Two Hundred Ninety Five Billion One Hundred Ninety Seven Million Two Hundred Thirty Four Thousand Seven Hundred Sixty Eight'
  );
});
