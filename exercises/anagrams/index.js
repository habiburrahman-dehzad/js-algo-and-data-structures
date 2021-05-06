// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const cleanString = (str) =>
  str
    .toLowerCase()
    .replace(/[^a-z]+/g, '')
    .split('')
    .sort()
    .join('');

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

module.exports = anagrams;

/*
const buildCharMap = (str) => {
  const charMap = {};
  for (const char of str.toLowerCase().replace(/[^a-z]+/g, '')) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
};
*/

/*
function anagrams(stringA, stringB) {
  const objA = buildCharMap(stringA);
  const objB = buildCharMap(stringB);

  if (Object.keys(objA).length !== Object.keys(objB).length) {
    return false;
  }

  for (const key in objA) {
    if (objA[key] !== objB[key]) {
      return false;
    }
  }

  return true;
}
*/
