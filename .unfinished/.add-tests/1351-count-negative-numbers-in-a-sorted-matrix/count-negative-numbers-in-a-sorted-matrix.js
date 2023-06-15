/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
  let count = 0;

  for (let rowIdx = 0; rowIdx < grid.length; rowIdx++) {
    for (let colIdx = grid[rowIdx].length - 1; colIdx >= 0; colIdx--) {
      if (grid[rowIdx][colIdx] < 0) {
        count += 1;
      } else {
        break;
      }
    }
  }

  return count;
};

module.exports = countNegatives;
