/**
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

Example 2:

Input: n = 1
Output: ["()"]

 

Constraints:

    1 <= n <= 8
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  if (n === 1) {
    return ['()'];
  }

  let braces = generateParenthesis(n - 1);
  let resultSet = new Set();
  for (const s of braces) {
    for (let j = 0; j < s.length; j++) {
      let part1 = s.substring(0, j);
      let part2 = s.substring(j);

      resultSet.add(`${part1}()${part2}`);
      resultSet.add(`(${part1})${part2}`);
      resultSet.add(`${part1}(${part2})`);
    }
  }

  return Array.from(resultSet.values()).sort();
};

module.exports = generateParenthesis;
