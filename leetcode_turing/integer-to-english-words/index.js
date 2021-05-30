/**
Convert a non-negative integer num to its English words representation.

 

Example 1:

Input: num = 123
Output: "One Hundred Twenty Three"

Example 2:

Input: num = 12345
Output: "Twelve Thousand Three Hundred Forty Five"

Example 3:

Input: num = 1234567
Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"

Example 4:

Input: num = 1234567891
Output: "One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One"

 

Constraints:

    0 <= num <= 2^31 - 1


 */

/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function (num) {
  if (num === 0) {
    return 'Zero';
  }

  const ones = {
    0: '',
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine',
    10: 'Ten',
    11: 'Eleven',
    12: 'Twelve',
    13: 'Thirteen',
    14: 'Fourteen',
    15: 'Fifteen',
    16: 'Sixteen',
    17: 'Seventeen',
    18: 'Eighteen',
    19: 'Nineteen',
  };

  const tens = {
    0: '',
    1: '',
    2: 'Twenty',
    3: 'Thirty',
    4: 'Forty',
    5: 'Fifty',
    6: 'Sixty',
    7: 'Seventy',
    8: 'Eighty',
    9: 'Ninety',
  };

  const groups = {
    0: 'Hundred',
    1: 'Thousand',
    2: 'Million',
    3: 'Billion',
    4: 'Trillion',
  };

  let result = '';
  let place = 0;
  let last;
  let beforeLast;

  while (num > 0) {
    last = num % 10;
    num = Math.floor(num / 10);
    place++;

    if ((place - 1) % 3 === 0) {
      beforeLast = num % 10;
      num = Math.floor(num / 10);
      place++;
    }

    if (place % 3 === 0 && last !== 0) {
      if (place / 3 > 1 && result.indexOf(groups[place / 3 - 1]) === -1) {
        result = ` ${groups[place / 3 - 1]}` + result;
      }
      result = ` ${ones[last]} ${groups[place % 3]}` + result;
    } else if ((place - 2) % 3 === 0) {
      if ((place - 2) / 3 >= 1 && (last || beforeLast)) {
        result = ` ${groups[(place - 2) / 3]}` + result;
      }

      if (beforeLast === 1) {
        result = ` ${ones[beforeLast * 10 + last]}` + result;
      } else {
        result = last ? ` ${ones[last]}` + result : result;
        result = beforeLast ? ` ${tens[beforeLast]}` + result : result;
      }
    }
  }

  return result.replace('  ', ' ').trim();
};

module.exports = numberToWords;
