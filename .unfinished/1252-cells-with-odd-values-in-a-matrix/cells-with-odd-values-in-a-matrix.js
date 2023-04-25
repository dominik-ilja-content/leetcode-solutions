/*
  m = rows of initial array
  n = cols of initial array
  [
    [0,0,0]
    [0,0,0]
  ]
  indicies[0] = [0,1]
  increment all of row [0][0] and all cols of col [0][1]
  [
    [1,2,1]
    [0,1,0]
  ]
  indicies[1] = [1,1] increment all of row 1 and all of col 1
  [
    [1,2,1]
    [1,1,1]
  ]
*/

/**
 * @param {number[][]} matrix
 * @param {number} row
 * @param {number} col
 * @param {number} amount
 */
function incrementCells(matrix, row, col) {
  for (let i = 0; i < matrix[row].length; i++) {
    matrix[row][i] += 1;
  }

  for (let i = 0; i < matrix.length; i++) {
    matrix[i][col] += 1;
  }
}

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function (m, n, indices) {
  const matrix = [];
  let oddCellCount = 0;

  for (let rowIdx = 0; rowIdx < m; rowIdx++) {
    matrix.push([]);
    for (let colIdx = 0; colIdx < n; colIdx++) {
      matrix[rowIdx].push(0);
    }
  }

  for (let i = 0; i < indices.length; i++) {
    const row = indices[i];
    incrementCells(matrix, row[0], row[1]);
  }

  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      if (row[j] % 2 !== 0) {
        oddCellCount += 1;
      }
    }
  }

  return oddCellCount;
};

let m = 2;
let n = 3;
let indices = [
  [0, 1],
  [1, 1],
];
let expected = 6;
let result = oddCells(m, n, indices);

module.exports = oddCells;
