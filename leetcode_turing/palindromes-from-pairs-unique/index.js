/**
 * @param {string[]} words
 * @return {number[[]]}
 */
var palindromePairs = function (words) {
  const isPalindrome = (s) => {
    const last = s.length - 1;
    const half = Math.floor(last / 2);
    for (let index = 0; index <= half; index++) {
      if (s[index] !== s[last - index]) {
        return false;
      }
    }

    return true;
  };

  const reverse = (s) => {
    let rev = '';
    for (let i = s.length - 1; i >= 0; i--) {
      rev += s[i];
    }

    return rev;
  };

  let result = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const rev = reverse(word);

    for (let j = i + 1; j < words.length; j++) {
      const w = words[j];
      let check = false;
      if (word.length > w.length) {
        if (word.includes(w) || rev.includes(w)) {
          check = true;
        }
      } else {
        if (w.includes(word) || w.includes(rev)) {
          check = true;
        }
      }

      if (check) {
        if (isPalindrome(word + w)) {
          result.push([i, j]);
        }
        if (isPalindrome(w + word)) {
          result.push([j, i]);
        }
      }
    }
  }

  return result;
};

console.log(palindromePairs(['abcd', 'dcba', 'lls', 's', 'sssll']));

module.exports = palindromePairs;
