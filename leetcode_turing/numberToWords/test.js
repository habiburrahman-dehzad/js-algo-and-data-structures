const numberToWords = require('./index');

test('should be a function', () => {
  expect(typeof numberToWords).toEqual('function');
});

test('should return the correct words for the number', () => {
  const words = numberToWords(9995);
  expect(words).toEqual('nine thousand nine hundred ninety five');
});

test('should return the correct words for the number', () => {
  const words = numberToWords(1001);
  expect(words).toEqual('one thousand one');
});

test('should return the correct words for the number', () => {
  const words = numberToWords(3);
  expect(words).toEqual('three');
});

test('should return the correct words for the number', () => {
  const words = numberToWords(1234872936);
  expect(words).toEqual(
    'one billion two hundred thirty four million eight hundred seventy two thousand nine hundred thirty six'
  );
});

test('should return the correct words for the number', () => {
  const words = numberToWords(92827382929);
  expect(words).toEqual(
    'ninety two billion eight hundred twenty seven million three hundred eighty two thousand nine hundred twenty nine'
  );
});

test('should return the correct words for the number', () => {
  const words = numberToWords(100000000);
  expect(words).toEqual('one hundred million');
});

test('should return the correct words for the number', () => {
  const words = numberToWords(10010010);
  expect(words).toEqual('ten million ten thousand ten');
});

test('should return the correct words for the number', () => {
  const words = numberToWords(1001001);
  expect(words).toEqual('one million one thousand one');
});
