// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const matches = str.match(/[aeiou]/gi);

  return matches?.length || 0;
}

module.exports = vowels;

/*
function vowels(str) {
  const strippedStr = str.replace(/[aeiou]/gi, '');

  return str.length - strippedStr.length;
}
*/

/*
function vowels(str) {
  const allVowels = ['a', 'e', 'i', 'o', 'u'];

  let numOfVowels = 0;
  for (const char of str.toLowerCase()) {
    if (allVowels.includes(char)) {
      numOfVowels++;
    }
  }

  return numOfVowels;
}
*/
