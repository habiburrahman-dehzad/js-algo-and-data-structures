/**
 * Pseudo Code:
 * define a two dimentional array of numRows dimensions
 * repeat until end of s
 *      if row is not an array create an array for the row
 *
 */

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows == 1) return s;

  let row = 0;
  let col = 0;
  let arr = [];

  for (let i = 0; i < s.length; ) {
    while (row < numRows && i < s.length) {
      if (!arr[row]) {
        arr[row] = [];
      }

      arr[row++][col] = s[i++];
    }

    row--;
    while (row > 0 && i < s.length) {
      arr[--row][++col] = s[i++];
    }

    row++;
  }

  let result = '';
  for (let i = 0; i < numRows; i++) {
    if (!arr[i]) {
      break;
    }

    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j]) {
        result += arr[i][j];
      }
    }
  }

  return result;
};

console.log(convert('A', 100));

module.exports = convert;
