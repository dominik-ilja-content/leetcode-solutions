/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function (grid) {
  function findMaxInSubMatrix(rowStart, rowEnd, colStart, colEnd) {
    let max = 0; // 1 <= grid[i][j] <= 100

    for (let row = rowStart; row <= rowEnd; row++) {
      for (let col = colStart; col <= colEnd; col++) {
        if (max < grid[row][col]) {
          max = grid[row][col];
        }
      }
    }

    return max;
  }

  const output = [];

  for (let endRow = 2; endRow < grid.length; endRow++) {
    const startRow = endRow - 2;
    const outputRow = [];
    for (let endCol = 2; endCol < grid.length; endCol++) {
      const startCol = endCol - 2;
      const max = findMaxInSubMatrix(startRow, endRow, startCol, endCol);
      outputRow.push(max);
    }

    output.push(outputRow);
  }

  return output;
};

module.exports = largestLocal;
