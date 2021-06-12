/**

32. Longest Valid Parentheses
Hard

Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

 

Example 1:

Input: s = "(()"
Output: 2
Explanation: The longest valid parentheses substring is "()".

Example 2:

Input: s = ")()())"
Output: 4
Explanation: The longest valid parentheses substring is "()()".

Example 3:

Input: s = ""
Output: 0

 

Constraints:

    0 <= s.length <= 3 * 10^4
    s[i] is '(', or ')'.


 */

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let left = 0;
  let right = 0;
  let maxlength = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      left++;
    } else {
      right++;
    }
    if (left === right) {
      maxlength = Math.max(maxlength, 2 * right);
    } else if (right >= left) {
      left = right = 0;
    }
  }
  left = right = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === '(') {
      left++;
    } else {
      right++;
    }
    if (left === right) {
      maxlength = Math.max(maxlength, 2 * left);
    } else if (left >= right) {
      left = right = 0;
    }
  }

  return maxlength;
};

module.exports = longestValidParentheses;
