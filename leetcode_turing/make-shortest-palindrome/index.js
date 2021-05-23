/**
 * Pseudo Code:
 * reverse the string
 *
 */

/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function (s) {
  const reverse = (s) => {
    let rev = '';
    for (let i = s.length - 1; i >= 0; i--) {
      rev += s[i];
    }

    return rev;
  };

  let n = s.length;
  let rev = reverse(s);
  let j = 0;
  for (let i = 0; i < n; i++) {
    if (s.substring(0, n - i) === rev.substring(i)) {
      return rev.substring(0, i) + s;
    }
  }

  return '';
};

// console.log(shortestPalindrome('aacecaaa'));
// console.log(shortestPalindrome('abcd'));

module.exports = shortestPalindrome;
