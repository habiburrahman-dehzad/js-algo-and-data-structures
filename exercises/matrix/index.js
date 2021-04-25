// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//      [8, 9, 4],
//      [7, 6, 5]]
//  matrix(4)
//     [[1,  2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

/*
Pseudo Code:
    get NxN and assign it to size;
    create and array of N subarrays each filled with N 0s
    assign 0 to startCol and N - 1 to endCol
    assign 0 to startRow and N - 1 to endRow
    set counter to 1
    do until counter is equal to size
        from startCol to endCol
            assign counter to each cell
            increment counter

        increment startRow

        from startRow to endRow in the endCol
            assign counter to each cell of the endCol
            increment counter

        decrement endCol

        from endCol to startCol in the endRow
            assign counter to each cell
            increment counter

        decrement endRow

        from endRow to startRow in the startCol
            assign counter to each cell of the endCol
            increment counter

        increment startCol
    repeat
*/

function matrix(n) {
  const size = n * n;
  const spiralMatrix = [];
  for (let i = 0; i < n; i++) {
    spiralMatrix[i] = [];
  }

  let startCol = 0,
    endCol = n - 1;
  let startRow = 0,
    endRow = n - 1;
  let counter = 1;

  while (counter <= size) {
    for (let col = startCol; col <= endCol; col++) {
      spiralMatrix[startRow][col] = counter++;
    }

    startRow++;

    for (let row = startRow; row <= endRow; row++) {
      spiralMatrix[row][endCol] = counter++;
    }

    endCol--;

    for (let col = endCol; col >= startCol; col--) {
      spiralMatrix[endRow][col] = counter++;
    }

    endRow--;

    for (let row = endRow; row >= startRow; row--) {
      spiralMatrix[row][startCol] = counter++;
    }

    startCol++;
  }

  return spiralMatrix;
}

module.exports = matrix;
