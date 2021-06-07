/**
 * Given two arrays, A an array of strings containing contact names and B an array of strings
 * containing phone numbers. Saved numbers are represented by two arrays A and B and numbered
 * from 0 to N - 1. For every i, A[i] is the contact name and B[i] is the related
 * phone number.
 * P is a given partial phone number representing a contiguous string of numbers.
 * Return the contact name who's phone number contains P as a substring and as a contiguous
 * segment. For example if the contact number is "342334860016" and P = '3486' matches this
 * number, but '3416' does not.
 * If there is more than one contact matching with the given number, the function should
 * return the alphabetically shorter contact name.
 * If no phone number matches the given number, the function should return 'NO CONTACT'
 *
 * Assume:
 *      N is an integer in the range [1...100]
 *      each name has a length of at least 1 and at most 9
 *      each name consists of only lowercase English letters
 *      each phone number has length 9
 *      each phone number consists only of digits
 *      the partial phone number (P) is a string with a length of at least 1 and at most 9
 *      the partial phone number (P) consists only of digits
 *
 * @param {string[]} A
 * @param {string[]} B
 * @param {string} P
 * @returns {string}
 */
function solution(A, B, P) {
  let match = '';
  for (let i = 0; i < B.length; i++) {
    if (B[i].indexOf(P) >= 0) {
      if (!match || match > A[i]) {
        match = A[i];
      }
    }
  }

  if (!match) {
    return 'NO CONTACT';
  }

  return match;
}

module.exports = solution;
