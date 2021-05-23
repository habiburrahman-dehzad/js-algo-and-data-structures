/**
 * Pseudo Code:
 * start with first character of s
 * repeat until the last character
 *  start from the current index
 *  repeat until the slice is equal to the string
 *      go one charactor to right
 *      check if it is a palindrome and its length is greater than the previous palindrome
 *          if it is assign it to palidrome
 *      go one charactor to left
 *      check if it is a palindrome and its length is greater than the previous palindrome
 *          if it is assign it to palidrome
 * return the palindrome
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
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

  let maxPalindrome = s[0];
  let maxLen = 1;
  let left = 0;
  let right = 0;
  let index = 0;

  let pal = '';
  while (index < s.length) {
    left = index;
    right = index;
    while (left >= 0 && right < s.length) {
      right++;
      if (isPalindrome(s.slice(left, right + 1))) {
        pal = s.slice(left, right + 1);
        if (pal.length > maxLen) {
          maxPalindrome = pal;
          maxLen = maxPalindrome.length;
        }
      }

      left--;
      if (isPalindrome(s.slice(left >= 0 ? left : 0, right + 1))) {
        pal = s.slice(left, right + 1);
        if (pal.length > maxLen) {
          maxPalindrome = pal;
          maxLen = maxPalindrome.length;
        }
      }
    }

    index++;
  }

  return maxPalindrome;
};

console.log(
  longestPalindrome(
    'zudfweormatjycujjirzjpyrmaxurectxrtqedmmgergwdvjmjtstdhcihacqnothgttgqfywcpgnuvwglvfiuxteopoyizgehkwuvvkqxbnufkcbodlhdmbqyghkojrgokpwdhtdrwmvdegwycecrgjvuexlguayzcammupgeskrvpthrmwqaqsdcgycdupykppiyhwzwcplivjnnvwhqkkxildtyjltklcokcrgqnnwzzeuqioyahqpuskkpbxhvzvqyhlegmoviogzwuiqahiouhnecjwysmtarjjdjqdrkljawzasriouuiqkcwwqsxifbndjmyprdozhwaoibpqrthpcjphgsfbeqrqqoqiqqdicvybzxhklehzzapbvcyleljawowluqgxxwlrymzojshlwkmzwpixgfjljkmwdtjeabgyrpbqyyykmoaqdambpkyyvukalbrzoyoufjqeftniddsfqnilxlplselqatdgjziphvrbokofvuerpsvqmzakbyzxtxvyanvjpfyvyiivqusfrsufjanmfibgrkwtiuoykiavpbqeyfsuteuxxjiyxvlvgmehycdvxdorpepmsinvmyzeqeiikajopqedyopirmhymozernxzaueljjrhcsofwyddkpnvcvzixdjknikyhzmstvbducjcoyoeoaqruuewclzqqqxzpgykrkygxnmlsrjudoaejxkipkgmcoqtxhelvsizgdwdyjwuumazxfstoaxeqqxoqezakdqjwpkrbldpcbbxexquqrznavcrprnydufsidakvrpuzgfisdxreldbqfizngtrilnbqboxwmwienlkmmiuifrvytukcqcpeqdwwucymgvyrektsnfijdcdoawbcwkkjkqwzffnuqituihjaklvthulmcjrhqcyzvekzqlxgddjoir'
  )
);

module.exports = longestPalindrome;
