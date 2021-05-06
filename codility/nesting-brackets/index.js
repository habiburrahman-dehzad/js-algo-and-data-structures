function solution(s) {
  if (s.length === 0) {
    return 1;
  }

  if (s.length === 1) {
    return 0;
  }

  const brackets = [];

  for (const char of s) {
    if (char === '(') {
      brackets.push(char);
    } else {
      if (brackets.length === 0) {
        return 0;
      }

      const prevChar = brackets.pop();
      if (prevChar !== '(') {
        return 0;
      }
    }
  }

  return brackets.length === 0 ? 1 : 0;
}

console.log(solution('(()(()))'));
module.exports = solution;
