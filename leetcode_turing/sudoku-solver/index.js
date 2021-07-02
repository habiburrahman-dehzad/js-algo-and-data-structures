/**

37. Sudoku Solver
Hard

Write a program to solve a Sudoku puzzle by filling the empty cells.

A sudoku solution must satisfy all of the following rules:

    Each of the digits 1-9 must occur exactly once in each row.
    Each of the digits 1-9 must occur exactly once in each column.
    Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.

The '.' character indicates empty cells.

 

Example 1:

Input: board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
Output: [["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]]
Explanation: The input board is shown above and the only valid solution is shown below:


 

Constraints:

    board.length == 9
    board[i].length == 9
    board[i][j] is a digit or '.'.
    It is guaranteed that the input board has only one solution.

 */

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === '.') {
        for (let num = 1; num < 10; num++) {
          if (isValid(board, i, j, num.toString())) {
            board[i][j] = num.toString();
            let result = solveSudoku(board);
            if (result !== false) return result; // if we never hit false outside this loop then it means the board is a solution
            board[i][j] = '.'; // if it was false then reset the value
          }
        }
        return false; // if we exit the for loop it means there was no solution so return false
      }
    }
  }
  return board;
};

function isValid(board, row, col, num) {
  let startCol = 3 * Math.floor(col / 3);
  let endCol = startCol + 3;
  let startRow = 3 * Math.floor(row / 3);
  let endRow = startRow + 3;

  for (let i = 0; i < board.length; i++) {
    if (board[row][i] === num) return false;
    if (board[i][col] === num) return false;
  }

  // Checking the sub-box for duplicate number
  for (let i = startRow; i < endRow; i++) {
    for (let j = startCol; j < endCol; j++) {
      if (board[i][j] === num) return false;
    }
  }

  return true;
}

module.exports = solveSudoku;
