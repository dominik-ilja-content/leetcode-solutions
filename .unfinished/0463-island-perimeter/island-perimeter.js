/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  const islandCode = 1;
  const visited = new Set();
  let perimeter = 0;
  function traverse(row, col) {
    let validSides = 4;
    visited.add(`${row},${col}`);

    // left
    if (grid[row][col - 1] === islandCode) {
      if (!visited.has(`${row},${col - 1}`)) {
        traverse(row, col - 1);
      }

      validSides -= 1;
    }
    // top
    if (grid[row - 1] !== undefined && grid[row - 1][col] === islandCode) {
      if (!visited.has(`${row - 1},${col}`)) {
        traverse(row - 1, col);
      }

      validSides -= 1;
    }
    // right
    if (grid[row][col + 1] === islandCode) {
      if (!visited.has(`${row},${col + 1}`)) {
        traverse(row, col + 1);
      }

      validSides -= 1;
    }
    // bottom
    if (grid[row + 1] !== undefined && grid[row + 1][col] === islandCode) {
      if (!visited.has(`${row + 1},${col}`)) {
        traverse(row + 1, col);
      }

      validSides -= 1;
    }

    perimeter += validSides;
  }

  // iterate through matrix until we find an island cell
  for (let rowIdx = 0; rowIdx < grid.length; rowIdx++) {
    const row = grid[rowIdx];
    for (let colIdx = 0; colIdx < row.length; colIdx++) {
      const col = row[colIdx];
      if (col === islandCode) {
        traverse(rowIdx, colIdx);
        return perimeter;
      }
    }
  }

  return 0; // no islands
};

console.log(islandPerimeter([[0, 1]]));
// console.log(
//   islandPerimeter([
//     [0, 1, 0, 0],
//     [1, 1, 1, 0],
//     [0, 1, 0, 0],
//     [1, 1, 0, 0],
//   ])
// );

module.exports = islandPerimeter;
