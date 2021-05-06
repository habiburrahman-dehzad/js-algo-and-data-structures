// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const chunks = [];
  let step = 0;
  while (step < array.length) {
    chunks.push(array.slice(step, size + step));
    step += size;
  }

  return chunks;
}

module.exports = chunk;

/*
function chunk(array, size) {
  const chunks = [];

  for (let element of array) {
    const last = chunks[chunks.length - 1];
    if (!last || last.length === size) {
      chunks.push([element]);
    } else {
      last.push(element);
    }
  }

  return chunks;
}
*/

/*
function chunk(array, size) {
  const chunks = [];

  let len = array.length;
  let step = size;
  while (step < len + size) {
    const arr = [];
    for (let index = step - size; index < step && index < len; index++) {
      arr.push(array[index]);
    }

    chunks.push(arr);
    step += size;
  }

  return chunks;
}
*/
