/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const rows = board.length;
  const cols = board[0].length;
  const path = new Set();

  function dfs(row, col, idx) {
    if (idx == word.length) {
      return true;
    }
    if (
      row < 0 ||
      col < 0 ||
      row >= rows ||
      col >= cols ||
      word[idx] != board[row][col] ||
      path.has(`${row}, ${col}`)
    ) {
      return false;
    }

    path.add(`${row}, ${col}`);
    const result =
      dfs(row + 1, col, idx + 1) ||
      dfs(row - 1, col, idx + 1) ||
      dfs(row, col + 1, idx + 1) ||
      dfs(row, col - 1, idx + 1);
    path.delete(`${row}, ${col}`);

    return result;
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (dfs(row, col, 0)) {
        return true;
      }
    }
  }

  return false;
};

let board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];
let word = "ABCCED";

console.log(exist(board, word));

module.exports = exist;
