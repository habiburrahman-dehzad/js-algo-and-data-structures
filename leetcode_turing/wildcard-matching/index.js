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
  for (const c of p) {
    if (c === '*' && newp[newp.length - 1] === '*') {
      continue;
    }
    newp += c;
  }

  newp = newp.replace(/\?/g, '.');
  newp = newp.replace(/\*/g, '[a-z]*');

  const regex = new RegExp(newp);
  const match = s.match(regex);

  return match !== null && match.input === match[0];
};

console.log(
  isMatch(
    'bbbbabaabbabbababaabaabababaababaaaabaaabbbabbbbbbabbabbabbaaabaababbbababbbaaababbbbaabbaababbabababbbbbbabbbbbaabbabaababbabbbbbbaabbbabbbaabaaababaabaaaabababbababbaaabbaabaabaabbbbbbaabbaaaaaabbabb',
    'aa***bb*b**a***bb***b*b*ba********ba***bbbb*bba*a*b***ba*a*b**aabbba*aba****a*ba*****a*bab**a**b**b*a*'
  )
);

module.exports = isMatch;
