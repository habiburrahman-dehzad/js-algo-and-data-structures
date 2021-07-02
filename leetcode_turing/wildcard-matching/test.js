const isMatch = require('./index');

test('should be a function', () => {
  expect(typeof isMatch).toEqual('function');
});

test('should return the correct result', () => {
  const result = isMatch('aa', 'a');

  expect(result).toEqual(false);
});

test('should return the correct result', () => {
  const result = isMatch('aa', '*');

  expect(result).toEqual(true);
});

test('should return the correct result', () => {
  const result = isMatch('cb', '?a');

  expect(result).toEqual(false);
});

test('should return the correct result', () => {
  const result = isMatch('adceb', '*a*b');

  expect(result).toEqual(true);
});

test('should return the correct result', () => {
  const result = isMatch('acdcb', 'a*c?b');

  expect(result).toEqual(false);
});

test('should return the correct result', () => {
  const result = isMatch('acdcob', 'a*c?b');

  expect(result).toEqual(true);
});

test('should return the correct result', () => {
  const result = isMatch('', '******');

  expect(result).toEqual(true);
});

test('should return the correct result', () => {
  const result = isMatch(
    'bbbbabaabbabbababaabaabababaababaaaabaaabbbabbbbbbabbabbabbaaabaababbbababbbaaababbbbaabbaababbabababbbbbbabbbbbaabbabaababbabbbbbbaabbbabbbaabaaababaabaaaabababbababbaaabbaabaabaabbbbbbaabbaaaaaabbabb',
    'aa***bb*b**a***bb***b*b*ba********ba***bbbb*bba*a*b***ba*a*b**aabbba*aba****a*ba*****a*bab**a**b**b*a*'
  );

  expect(result).toEqual(false);
});
