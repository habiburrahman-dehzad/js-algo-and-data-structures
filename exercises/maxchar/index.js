// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charSet = {};

  for (const char of str) {
    charSet[char] = charSet[char] + 1 || 1;
  }

  let max = 0;
  let charMax = '';
  for (const char in charSet) {
    if (charSet[char] > max) {
      max = charSet[char];
      charMax = char;
    }
  }

  return charMax;
}

module.exports = maxChar;
