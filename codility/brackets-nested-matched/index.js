function solution(s) {
  if (s.length === 0) {
    return 1;
  }

  const brackets = [];
  const openingBrks = {
    '[': true,
    '(': true,
    '{': true,
  };
  const closingBrks = {
    ']': true,
    ')': true,
    '}': true,
  };

  for (const char of s) {
    if (openingBrks[char]) {
      brackets.push(char);
    } else if (closingBrks[char]) {
      if (brackets.length === 0) {
        return 0;
      }

      const ch = brackets.pop();
      if (
        (char === ')' && ch !== '(') ||
        (char === ']' && ch !== '[') ||
        (char === '}' && ch !== '{')
      ) {
        return 0;
      }
    }
  }

  return brackets.length > 0 ? 0 : 1;
}

console.log(solution('[]{[()]}()'));

module.exports = solution;
