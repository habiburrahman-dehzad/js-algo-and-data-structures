/*
You are given a string s and an array of strings words of the same length. Return all starting indices of substring(s) in s that is a concatenation of each word in words exactly once, in any order, and without any intervening characters.

You can return the answer in any order.

 

Example 1:

Input: s = "barfoothefoobarman", words = ["foo","bar"]
Output: [0,9]
Explanation: Substrings starting at index 0 and 9 are "barfoo" and "foobar" respectively.
The output order does not matter, returning [9,0] is fine too.

Example 2:

Input: s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]
Output: []

Example 3:

Input: s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]
Output: [6,9,12]

 

Constraints:

    1 <= s.length <= 104
    s consists of lower-case English letters.
    1 <= words.length <= 5000
    1 <= words[i].length <= 30
    words[i] consists of lower-case English letters.


*/

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
function findSubstring(s, words) {
  if (s.length < 1 || words.length < 1) {
    return [];
  }

  const result = [];
  const wordLength = words[0].length;
  const wordsTotalLength = wordLength * words.length;

  // we filter the words to be unique. don't repeat for the same word.
  // for each word we will check all its occurences. That means if the word
  // is repeated in the given array, all those occurences will be checked.
  const distinctWords = words.filter((word, index, self) => {
    return self.indexOf(word) === index;
  });

  // if the concatenation of all the words is longer than the given string
  // there will not be any chance
  if (s.length < wordsTotalLength) {
    return [];
  }

  for (let word of distinctWords) {
    let ind = s.indexOf(word);
    while (ind >= 0) {
      const res = checkForConcat(s, ind, words);
      if (res >= 0 && !result.includes(res)) {
        result.push(res);
      }

      ind = s.indexOf(word, ind + 1);
    }
  }

  return result;
}

/*
This function will go through the given segment to make sure the segment of the string
contains the concatenation of all the words in any order without any intervening characters.
*/
/**
 * @param {string} str
 * @param {number} index
 * @param {string[]} wordsArray
 * @return {number}
 */
function checkForConcat(str, index, wordsArray) {
  let currentIndex = index;

  // we don't modify the passed in array. create a copy so that we remove each word
  // when found. if any word remains in the array, that means the segment of the string
  // does not contain all words without intervening characters.
  const words = [...wordsArray];
  const wordLen = words[0].length;

  // We will move forward from the given index and checking words one by one
  // if not found then we will start going back from the given index.
  let goingForward = index === 0 || index < str.length - wordLen;

  while (words.length > 0) {
    // get the next chunk of chars equal to the length of a word of the array
    // all words in the given array are equal length
    // this chunk should be equal to one of the words in the array
    const nextChunk = str.slice(currentIndex, currentIndex + wordLen);

    // if the word is in the array, we will remove it to make sure it is not counted again.
    // if there are two or three same words, each one will be found and then removed.
    if (words.includes(nextChunk)) {
      words.splice(words.indexOf(nextChunk), 1);
    } else {
      // if we are going backward and the word does not match then either all words are
      // found or there is not match. We should break out of this loop.
      if (!goingForward) {
        break;
      }

      // if the chars does not match any of the words that means there are some intervening
      // characters. Now we should go backwards from the given index.
      goingForward = false;
      currentIndex = index;
    }

    if (goingForward) {
      currentIndex += wordLen;
    } else {
      // if all the words matched, we don't need to go back further
      currentIndex -= words.length > 0 ? wordLen : 0;
    }
  }

  if (words.length > 0) {
    return -1;
  }

  return index < currentIndex ? index : currentIndex;
}

module.exports.findSubstring = findSubstring;
