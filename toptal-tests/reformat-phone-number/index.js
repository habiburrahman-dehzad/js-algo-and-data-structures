/**
 * Given a string representing a phone number that should be reformatted. The string
 * consists of N characters, digits, spaces and/or dashes. Spaces and dashes can be ignored
 *
 * We want to reformat the number in a way that the digits are grouped in blockes of three
 * separated by single dashes. If necessary the last block or the last two blocks could be
 * of length two. But no block should be one digit
 *
 * @param {string} S
 * @returns {string}
 */
function solution(S) {
  S = S.replace(/[- ]/g, '');
  let result = '';
  for (let i = 0; i < S.length; ) {
    let limit = i === S.length - 4 ? i + 2 : i + 3;
    result += S.slice(i, limit);

    i += i === S.length - 4 ? 2 : 3;

    if (i < S.length - 1) {
      result += '-';
    }
  }

  return result;
}

console.log(solution('0   22  48 5555 8361'));

module.exports = solution;
