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

    1 <= s.length <= 10^4
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
  const wordsJoinedStr = words.join('');
  const wordsJoinedSortedStr = wordsJoinedStr.split('').sort().join('');
  const totalWordsLen = wordsJoinedStr.length;

  if (s.length < totalWordsLen) {
    return [];
  }

  if (s.length === totalWordsLen) {
    if (s.split('').sort().join('') === wordsJoinedSortedStr) {
      return [0];
    } else {
      return [];
    }
  }

  let result = [];

  let limit = s.length - totalWordsLen + 1;
  for (let i = 0; i < limit; i++) {
    const segment = s.slice(i, totalWordsLen + i);
    if (checkSegment(s, segment, [...words], wordsJoinedSortedStr)) {
      result.push(i);
    }
  }

  return result;
}

function checkSegment(s, segment, words, sortedWordsStr) {
  const wordLen = words[0].length;

  if (segment.split('').sort().join('') !== sortedWordsStr) {
    return false;
  }

  for (const word of words) {
    // the index should be on word boundaries. for example if the word length is 4
    // the index should be zero, or 4, or 8, or some multiple of 4. That means it found
    // a word. Otherwise it will be in the middle of words. The characters maybe the same
    // but removing the words like that will give incorrect result.
    let index = segment.indexOf(word);
    while (index % wordLen !== 0 && index !== -1) {
      index = segment.indexOf(word, index + 1);
    }

    if (index >= 0) {
      const first = index !== 0 ? segment.slice(0, index) : '';
      segment = first + segment.slice(index + wordLen);
    } else {
      return false;
    }
  }

  // for (let i = 0; i < segment.length; i += wordLen) {
  //   const word = segment.slice(i, wordLen + i);
  //   const index = words.indexOf(word);
  //   if (index >= 0) {
  //     words.splice(index, 1);
  //   }
  // }

  // return words.length === 0;
  return segment.length === 0;
}

console.log(findSubstring('ababaab', ['ab', 'ba', 'ba']));
module.exports.findSubstring = findSubstring;
