/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function (grid) {
  let output = 0;
  let colMaxRowIdx = null;
  let colMaxColIdx = null;

  for (let i = 0; i < grid[0].length; i++) {
    let max = -Infinity;
    for (let row = 0; row < grid.length; row++) {
      let colMax = -Infinity;
      for (let col = 0; col < grid[row].length; col++) {
        if (colMax < grid[row][col]) {
          colMax = grid[row][col];
          colMaxRowIdx = row;
          colMaxColIdx = col;
        }
      }

      if (max < colMax) {
        max = colMax;
      }

      grid[colMaxRowIdx][colMaxColIdx] = null;
    }

    output += max;
  }
  return output;
};

console.log(
  deleteGreatestValue([
    [1, 2, 4],
    [3, 3, 1],
  ])
);
console.log(deleteGreatestValue([[10]]));

module.exports = deleteGreatestValue;
