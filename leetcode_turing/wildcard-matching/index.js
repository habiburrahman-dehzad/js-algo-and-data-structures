/**

44. Wildcard Matching
Hard

Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*' where:

    '?' Matches any single character.
    '*' Matches any sequence of characters (including the empty sequence).

The matching should cover the entire input string (not partial).

 

Example 1:

Input: s = "aa", p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".

Example 2:

Input: s = "aa", p = "*"
Output: true
Explanation: '*' matches any sequence.

Example 3:

Input: s = "cb", p = "?a"
Output: false
Explanation: '?' matches 'c', but the second letter is 'a', which does not match 'b'.

Example 4:

Input: s = "adceb", p = "*a*b"
Output: true
Explanation: The first '*' matches the empty sequence, while the second '*' matches the substring "dce".

Example 5:

Input: s = "acdcb", p = "a*c?b"
Output: false

 

Constraints:

    0 <= s.length, p.length <= 2000
    s contains only lowercase English letters.
    p contains only lowercase English letters, '?' or '*'.

*/

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  let newp = '';
  let lastCh = '';
  for (const c of p) {
    if (c === '*' && lastCh === '*') {
      continue;
    }
    newp += c;
    lastCh = c;
  }

  p = newp;

  const dp = Array(s.length + 1)
    .fill(0)
    .map(() => Array(p.length + 1).fill(false));

  dp[0][0] = true;
  if (p[0] === '*') {
    dp[0][1] = true;
  }

  for (let si = 1; si <= s.length; si++) {
    for (let pi = 1; pi <= p.length; pi++) {
      const cs = s[si - 1];
      const cp = p[pi - 1];
      if (cs === cp || cp === '?') dp[si][pi] = dp[si - 1][pi - 1];
      if (cp === '*') dp[si][pi] = dp[si - 1][pi] || dp[si][pi - 1];
    }
  }
  return dp[s.length][p.length];
};

console.log(isMatch('acdcb', 'a*c?b'));

module.exports = isMatch;
