const generateParenthesis = require('./index');

test('should be a function', () => {
  expect(typeof generateParenthesis).toEqual('function');
});

test('should return the correct result', () => {
  const result = generateParenthesis(3);
  expect(result).toEqual(['((()))', '(()())', '(())()', '()(())', '()()()']);
});

test('should return the correct result', () => {
  const result = generateParenthesis(1);
  expect(result).toEqual(['()']);
});

test('should return the correct result', () => {
  const result = generateParenthesis(4);
  expect(result).toEqual([
    '(((())))',
    '((()()))',
    '((())())',
    '((()))()',
    '(()(()))',
    '(()()())',
    '(()())()',
    '(())(())',
    '(())()()',
    '()((()))',
    '()(()())',
    '()(())()',
    '()()(())',
    '()()()()',
  ]);
});

test('should return the correct result', () => {
  const result = generateParenthesis(5);
  expect(result).toEqual([
    '((((()))))',
    '(((()())))',
    '(((())()))',
    '(((()))())',
    '(((())))()',
    '((()(())))',
    '((()()()))',
    '((()())())',
    '((()()))()',
    '((())(()))',
    '((())()())',
    '((())())()',
    '((()))(())',
    '((()))()()',
    '(()((())))',
    '(()(()()))',
    '(()(())())',
    '(()(()))()',
    '(()()(()))',
    '(()()()())',
    '(()()())()',
    '(()())(())',
    '(()())()()',
    '(())((()))',
    '(())(()())',
    '(())(())()',
    '(())()(())',
    '(())()()()',
    '()(((())))',
    '()((()()))',
    '()((())())',
    '()((()))()',
    '()(()(()))',
    '()(()()())',
    '()(()())()',
    '()(())(())',
    '()(())()()',
    '()()((()))',
    '()()(()())',
    '()()(())()',
    '()()()(())',
    '()()()()()',
  ]);
});
