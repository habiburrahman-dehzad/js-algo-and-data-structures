// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

/*
Pseudo Code:
    set base to 1
    from 1 up to n
        add 2 to the base

    assign '#' to pyramid
    from 1 up to base step 2
        get (base - index) and devide it by two and assign it to padding
        add (padding + pyramid length) spaces to the begining of the string and end of of the string and assign new string to row
        console log row
        add two more '#' to the pyramid
*/

function pyramid(n, row = 0, level = '') {
  const pyramidBase = 2 * n - 1;

  if (row === n) {
    return;
  }

  if (level.length === pyramidBase) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  const midpoint = Math.floor(pyramidBase / 2);
  let add;
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = '#';
  } else {
    add = ' ';
  }

  pyramid(n, row, level + add);
}

module.exports = pyramid;

/*
function pyramid(n) {
  const base = 2 * n - 1;
  const midpoint = Math.floor(base / 2);

  for (let row = 0; row < n; row++) {
    let level = '';

    for (let column = 0; column < base; column++) {
      if (column >= midpoint - row && column <= midpoint + row) {
        level += '#';
      } else {
        level += ' ';
      }
    }

    console.log(level);
  }
}
*/

/*
function pyramid(n, base, currentBase = 1, step = '#') {
  if (!base) {
    base = 2 * n - 1;
  }

  if (currentBase > base) {
    return;
  }

  let padding = Math.floor((base - currentBase) / 2); // whitespace padding for each side of the '#'
  let row = step.padStart(padding + step.length).padEnd(base);
  console.log(row);

  pyramid(n, base, currentBase + 2, step + '##');
}
*/

/*
function pyramid(n) {
  const base = 2 * n - 1;

  let pyramid = '#';
  for (let i = 1; i <= base; i += 2) {
    let padding = Math.floor((base - i) / 2); // padding for each side of the '#'
    let row = pyramid.padStart(padding + pyramid.length).padEnd(base);
    console.log(row);
    pyramid += '##';
  }
}
*/
