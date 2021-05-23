/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let str = '';
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    let idx = str.indexOf(s[i]);
    if (idx >= 0) {
      max = Math.max(str.length, max);
      str = str.slice(idx + 1) + s[i];
    } else {
      str += s[i];
    }

    if (i === s.length - 1) {
      max = Math.max(str.length, max);
    }
  }

  return max;
};

console.log(lengthOfLongestSubstring('abcabcbb'));

module.exports = lengthOfLongestSubstring;
