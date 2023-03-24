/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] !== '.') {
        if (
          !isValidRow(board, i, j) ||
          !isValidCol(board, i, j) ||
          !isValidSquare(board, i, j)
        ) {
          return false;
        }
      }
    }
  }
  return true;

  function isValidRow(board, i, j) {
    for (let k = 0; k < board[i].length; k++) {
      if (k !== j && board[i][k] === board[i][j]) {
        return false;
      }
    }
    return true;
  }

  function isValidCol(board, i, j) {
    for (let k = 0; k < board.length; k++) {
      if (k !== i && board[k][j] === board[i][j]) {
        return false;
      }
    }
    return true;
  }

  function isValidSquare(board, i, j) {
    let row = Math.floor(i / 3) * 3;
    let col = Math.floor(j / 3) * 3;
    for (let k = 0; k < 3; k++) {
      for (let l = 0; l < 3; l++) {
        if (
          row + k !== i &&
          col + l !== j &&
          board[row + k][col + l] === board[i][j]
        ) {
          return false;
        }
      }
    }
    return true;
  }
};

let board = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

console.log(isValidSudoku(board));
