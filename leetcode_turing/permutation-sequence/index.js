/**

60. Permutation Sequence
Hard

The set [1, 2, 3, ..., n] contains a total of n! unique permutations.

By listing and labeling all of the permutations in order, we get the following sequence for n = 3:

    "123"
    "132"
    "213"
    "231"
    "312"
    "321"

Given n and k, return the kth permutation sequence.

 

Example 1:

Input: n = 3, k = 3
Output: "213"

Example 2:

Input: n = 4, k = 9
Output: "2314"

Example 3:

Input: n = 3, k = 1
Output: "123"

 

Constraints:

    1 <= n <= 9
    1 <= k <= n!
*/

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
  let s = '';
  for (let i = 1; i <= n; i++) {
    s += i;
  }

  let perms = findPerm(s, k);

  return perms[k - 1];
};

function findPerm(s, k) {
  if (s.length === 0) return [''];
  if (s.length === 1) return [s];

  let result = [];
  for (let i = 0; i < s.length; i++) {
    const currentChar = s[i];
    const remaining = s.substring(0, i) + s.substring(i + 1);

    const perms = findPerm(remaining, k);
    for (let j = 0; j < perms.length; j++) {
      result.push(currentChar + perms[j]);
      if (k !== undefined) {
        k--;
      }

      if (k === 0) {
        return result;
      }
    }
  }

  return result;
}

console.log(getPermutation(1, 1));

module.exports = getPermutation;
