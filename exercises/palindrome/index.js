// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false
// Note: different solutions could be found to this problem below the module.exports statement.
//       They are commented out. You can uncomment and use them.

function palindrome(str) {
  const last = str.length - 1;
  const half = Math.floor(last / 2);
  for (let index = 0; index <= half; index++) {
    if (str[index] !== str[last - index]) {
      return false;
    }
  }

  return true;
}

module.exports = palindrome;

// function palindrome(str) {
//   const reversed = str.split('').reverse().join('');

//   return str === reversed;
// }
