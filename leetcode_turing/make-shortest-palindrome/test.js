const shortestPalindrome = require('./index');

test('should be a function', () => {
  expect(typeof shortestPalindrome).toEqual('function');
});

test('should return the correct result', () => {
  const result = shortestPalindrome('aacecaaa');
  expect(result).toEqual('aaacecaaa');
});

test('should return the correct result', () => {
  const result = shortestPalindrome('abcd');
  expect(result).toEqual('dcbabcd');
});

test('should return the correct result', () => {
  const result = shortestPalindrome('aaaaac');
  expect(result).toEqual('caaaaac');
});

test('should return the correct result', () => {
  const result = shortestPalindrome('acacacac');
  expect(result).toEqual('cacacacac');
});

test('should return the correct result', () => {
  const result = shortestPalindrome('alsdkjfqoiweuoiuoiuoiu');
  expect(result).toEqual('uiouiouiouewioqfjkdslalsdkjfqoiweuoiuoiuoiu');
});

test('should return the correct result', () => {
  const result = shortestPalindrome(
    'uiouiouiouewioqfjkdslalsdkjfqoiweuoiuoiuoiu'
  );
  expect(result).toEqual('uiouiouiouewioqfjkdslalsdkjfqoiweuoiuoiuoiu');
});
