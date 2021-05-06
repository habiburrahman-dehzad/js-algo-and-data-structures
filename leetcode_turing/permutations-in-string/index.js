/*
Leetcode challenge:
https://leetcode.com/problems/permutation-in-string/

Given two strings s1 and s2, return true if s2 contains the permutation of s1.

In other words, one of s1's permutations is the substring of s2.

Example 1:

Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").

Example 2:

Input: s1 = "ab", s2 = "eidboaoo"
Output: false

Constraints:

    1 <= s1.length, s2.length <= 10^4
    s1 and s2 consist of lowercase English letters.
*/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = function (s1, s2) {
  if (s2.length < s1.length) {
    return false;
  }

  const sortedS1 = s1.split('').sort().join('');
  if (s2.length === s1.length) {
    return s2.split('').sort().join('') === sortedS1;
  }

  const limit = s2.length - s1.length;
  for (let i = 0; i <= limit; i++) {
    const segment = s2.slice(i, i + s1.length);
    if (segment.split('').sort().join('') === sortedS1) {
      return true;
    }
  }

  return false;
};

module.exports = checkInclusion;
