/**

65. Valid Number
Hard

A valid number can be split up into these components (in order):

    A decimal number or an integer.
    (Optional) An 'e' or 'E', followed by an integer.

A decimal number can be split up into these components (in order):

    (Optional) A sign character (either '+' or '-').
    One of the following formats:
        One or more digits, followed by a dot '.'.
        One or more digits, followed by a dot '.', followed by one or more digits.
        A dot '.', followed by one or more digits.

An integer can be split up into these components (in order):

    (Optional) A sign character (either '+' or '-').
    One or more digits.

For example, all the following are valid numbers: ["2", "0089", "-0.1", "+3.14", "4.", "-.9", "2e10", "-90E3", "3e+7", "+6e-1", "53.5e93", "-123.456e789"], while the following are not valid numbers: ["abc", "1a", "1e", "e3", "99e2.5", "--6", "-+3", "95a54e53"].

Given a string s, return true if s is a valid number.

 

Example 1:

Input: s = "0"
Output: true

Example 2:

Input: s = "e"
Output: false

Example 3:

Input: s = "."
Output: false

Example 4:

Input: s = ".1"
Output: true

 

Constraints:

    1 <= s.length <= 20
    s consists of only English letters (both uppercase and lowercase), digits (0-9), plus '+', minus '-', or dot '.'.


 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
  s = s.toLocaleLowerCase();

  if (/[a-df-z]/g.test(s)) return false;

  let parts = s.split('e');
  if (parts.length > 2) {
    return false;
  }

  if (!testDecimal(parts[0])) {
    return false;
  }

  if (parts.length > 1 && !testExponent(parts[1])) {
    return false;
  }

  return true;
};

function testExponent(s) {
  if (!s.length) return false;

  let signed = s[0] === '+' || s[0] === '-';

  let regex = signed ? /[+-][0-9]+/g : /[0-9]*/g;

  return testRegex(regex, s);
}

function testDecimal(s) {
  let parts = s.split('.');
  if (parts.length > 2 || parts.length < 1) {
    return false;
  }

  // if every part only contains + and - or empty then it is not valid
  if (parts.every((p) => p.length === 0 || p === '+' || p === '-')) {
    return false;
  }

  let [significant, decimal] = parts;

  let signed = significant[0] === '+' || significant[0] === '-';

  let regex = signed ? /[+-][0-9]*/g : /[0-9]*/g;
  let test1 = testRegex(regex, significant);

  let test2 = decimal === undefined ? true : testRegex(/[0-9]*/g, decimal);

  return test1 && test2;
}

function testRegex(reg, s) {
  let match = s.match(reg);
  return match !== null && match[0] === s;
}

// console.log(isNumber('56+.84473'));

module.exports = isNumber;
