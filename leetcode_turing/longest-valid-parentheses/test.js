const longestValidParentheses = require('./index');

test('should be a function', () => {
  expect(typeof longestValidParentheses).toEqual('function');
});

test('should return the correct result', () => {
  const result = longestValidParentheses('(()');

  expect(result).toEqual(2);
});

test('should return the correct result', () => {
  const result = longestValidParentheses(')()())');

  expect(result).toEqual(4);
});

test('should return the correct result', () => {
  const result = longestValidParentheses('');

  expect(result).toEqual(0);
});

test('should return the correct result', () => {
  const result = longestValidParentheses('(()((())((()))))');

  expect(result).toEqual(16);
});

test('should return the correct result', () => {
  const result = longestValidParentheses('((((((((((()))))))))))');

  expect(result).toEqual(22);
});

test('should return the correct result', () => {
  const result = longestValidParentheses('(((((((((((');

  expect(result).toEqual(0);
});

test('should return the correct result', () => {
  const result = longestValidParentheses('))))))))))))))');

  expect(result).toEqual(0);
});

test('should return the correct result', () => {
  const result = longestValidParentheses('(()((())((()))');

  expect(result).toEqual(10);
});

test('should return the correct result', () => {
  const result = longestValidParentheses('(()((())(((');

  expect(result).toEqual(4);
});

test('should return the correct result', () => {
  const result = longestValidParentheses('()()');

  expect(result).toEqual(4);
});

test('should return the correct result', () => {
  const result = longestValidParentheses('(()()');

  expect(result).toEqual(4);
});

test('should return the correct result', () => {
  const result = longestValidParentheses(')()())()()(');

  expect(result).toEqual(4);
});

test('should return the correct result', () => {
  const result = longestValidParentheses('(()))())(');

  expect(result).toEqual(4);
});
