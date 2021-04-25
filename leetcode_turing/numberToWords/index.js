/*

How to print given Number in word.
Example: 9995 should be printed like "Nine Thousand Nine Hundred ninety five"

*/

function numberToWords(number) {
  const words = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
  };
  const tenthWordsBelowTwenty = {
    0: 'ten',
    1: 'eleven',
    2: 'twelve',
    3: 'thirteen',
    4: 'fourteen',
    5: 'fifteen',
    6: 'sixteen',
    7: 'seventeen',
    8: 'eighteen',
    9: 'nineteen',
  };
  const tenthWords = {
    2: 'twenty',
    3: 'thirty',
    4: 'fourty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety',
  };

  // it will process numbers up to one hundred trillion.
  // we can add more groups beyond trillion if needed.
  const digitGroupWords = {
    2: 'thousand',
    3: 'million',
    4: 'billion',
    5: 'trillion',
  };

  let result = '';

  // this will show the digit place in the given number, like first digit, second digit
  let counter = 1;

  while (number > 0) {
    const last = number % 10;
    number = Math.floor(number / 10);

    // this is for knowing the next number after the last digit
    // We use it to decide on words like eleven or twelve which depends on two numbers
    const beforeLast = number % 10;

    // if it is the first number in each of the tens, hundreds or thousands group
    // we have the second digit in beforeLast, so we increase the counter and drop the second
    // digit. We will use last and beforeLast to decide on two digit words like 'eleven',
    // 'twelve', 'twenty two' and so on.
    if (counter % 3 === 1 && number > 0) {
      number = Math.floor(number / 10);
      counter++;
    }

    // if it is 3rd digit or further we need to make sure words like hundred,
    // thousand and million are added.
    // make sure there is any number in each group of hundreds, thousands and so on.
    // if all the digits in a group are zeros we will escape it.
    if (counter > 2 && (last > 0 || beforeLast > 0)) {
      // get the digit group
      const group = Math.ceil(counter / 3);

      // make sure the words related to each group is added like thousand, million
      // billion and so on.
      if (counter / 3 > 1 && !result.includes(digitGroupWords[group])) {
        result = ` ${digitGroupWords[group]}` + result;
      }

      // add the word hundred.
      // this is for words like hundred, hundred thousand, hundred million and so on.
      // make sure the digit is not zero
      // like 200,000 (two hundred thousand). The two in sixth digit will trigger
      // the word 'hundred' to be added before 'thousand. But the third digit is
      // zero so we don't add 'hundred'.
      // If there is a zero like the third digit, we will escape adding
      // the word 'hundred'.
      if (counter % 3 === 0 && last > 0) {
        result = ' hundred' + result;
      }
    }

    // if the second digit in each group is one we will use one word for two digits like
    // eleven (11), twelve(12), thirteen(13) and so on. This should be 2nd digit like eleven,
    // 5th digit like 11 thousand, 7th digit like 11 million and so on.
    if (beforeLast === 1 && (counter - 2) % 3 === 0) {
      result = ` ${tenthWordsBelowTwenty[last]}` + result;
    } else {
      // add the word for the digit if not zero
      if (last) {
        result = ` ${words[last]}` + result;
      }

      // And add the word for the second digit like twenty, thirty, fourty and so on for
      // 2nd, 5th, 7th digits and so on. The digit should be non-zero.
      if ((counter - 2) % 3 === 0 && beforeLast > 0) {
        result = ` ${tenthWords[beforeLast]}` + result;
      }
    }

    counter++;
  }

  return result.trim();
}

module.exports = numberToWords;
