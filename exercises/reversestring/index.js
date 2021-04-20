// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'
// Note: different solutions could be found to this problem below the module.exports statement.
//       They are commented out. You can uncomment and use them.

function reverse(str) {
  return str.split('').reverse().join('');
}

module.exports = reverse;

// function reverse(str) {
//   const strArr = Array.from(str);
//   const reversed = strArr.reverse().join('');
//   return reversed;
// }

// function reverse(str) {
//   const arr = [];
//   for (let index = 0; index < str.length; index++) {
//     arr.unshift(str[index]);
//   }
//   const reversed = arr.join('');
//   return reversed;
// }

// function reverse(str) {
//   const arr = [];
//   for (let char of str) {
//     arr.unshift(char);
//   }
//   const reversed = arr.join('');
//   return reversed;
// }

// function reverse(str) {
//   const arr = [];
//   for (let char of str) {
//     arr.unshift(char);
//     debugger;
//   }
//   const reversed = arr.join('');
//   debugger;
//   return reversed;
// }

// function reverse(str) {
//   return str.split('').reduce((all, current) => current + all, '');
// }
