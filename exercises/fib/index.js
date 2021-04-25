// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

/*
Pseudo Code:
    create an array call it fibonacci and add 0 and 1 to it
    from 2 to N
        push the sum of the two previous items of the fibonacci array to fibonacci

    return the nth item of fibonacci
*/

// Memoization with recursion. This speeds up the execution by caching results.
function memoize(fn) {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

function slowFib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);

module.exports = fib;

/*
function fib(n) {
  const cache = [0, 1];
  const fibonacci = (n) => {
    if (cache[n] || cache[n] === 0) {
      return cache[n];
    }

    const a = fibonacci(n - 1);
    const b = fibonacci(n - 2);
    cache[n] = a + b;
    return cache[n];
  };

  return fibonacci(n);
}
*/

/*
function fib(n) {
  const fibonacci = [0, 1];
  for (let i = 2; i <= n; i++) {
    const a = fibonacci[i - 1];
    const b = fibonacci[i - 2];
    fibonacci.push(a + b);
  }

  return fibonacci[n];
}
*/

/*
function fib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}
*/
