/**
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

2 - abc
3 - def
4 - ghi
5 - jkl
6 - mno
7 - pqrs
8 - tuv
9 - wxyz

Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

Example 2:

Input: digits = ""
Output: []

Example 3:

Input: digits = "2"
Output: ["a","b","c"]

 

Constraints:

    0 <= digits.length <= 4
    digits[i] is a digit in the range ['2', '9'].


Pseudo-Code:
    if digits is empty return empty array
    if digits has one number return the string associated with that numbe in an array
    set k to last index of digits
    set i to zero
    repeat for i from 0 to k

 */

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };

  if (!digits) {
    return [];
  }

  if (digits.length === 1) {
    return map[digits[0]].split('');
  }

  let nums = [];
  for (const d of digits) {
    nums.push(map[d]);
  }

  const findPerms = (s, arr) => {
    if (!arr || arr.length === 0) {
      return s.split('');
    }

    let result = [];
    for (let i = 0; i < s.length; i++) {
      let c = s[i];

      let found = findPerms(arr[0], arr.slice(1));
      for (let j = 0; j < found.length; j++) {
        result.push(c + found[j]);
      }
    }

    return result;
  };

  return findPerms(nums[0], nums.slice(1));
};

module.exports = letterCombinations;
