// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz
// Note: different solutions could be found to this problem below the module.exports statement.
//       They are commented out. You can uncomment and use them.

function fizzBuzz(n) {
  for (let index = 1; index <= n; index++) {
    const fizz = index % 3 === 0;
    const buzz = index % 5 === 0;

    if (fizz && buzz) {
      console.log('fizzbuzz');
    } else if (fizz) {
      console.log('fizz');
    } else if (buzz) {
      console.log('buzz');
    } else {
      console.log(index);
    }
  }
}

module.exports = fizzBuzz;

/*
function fizzBuzz(n) {
  let step = 1;
  while (step <= n) {
    const fizz = step % 3 === 0;
    const buzz = step % 5 === 0;

    fizz && buzz && console.log('fizzbuzz');
    fizz && !buzz && console.log('fizz');
    buzz && !fizz && console.log('buzz');
    !fizz && !buzz && console.log(step);

    step++;
  }
}
*/
