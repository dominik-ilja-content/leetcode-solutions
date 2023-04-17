/*

[
  [1],
  [1, 1],
  [1, 2,  1],
  [1, 3,  3,  1],
  [1, 4,  6,  4,   1],
  [1, 5, 10, 10,   5,   1],
  [1, 6, 15, 20,  15,   6,  1],
  [1, 7, 21, 35,  35,  21,  7,  1],
  [1, 8, 28, 56,  70,  56, 28,  8, 1],
  [1, 9, 36, 84, 126, 126, 84, 36, 9, 1],
]

*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const result = [[1]];

  for (let i = 1; i < numRows; i++) {
    let prevRowIndex = i - 1;
    result.push([]);

    for (let j = i; j >= 0; j--) {
      result[i][j] =
        (result[prevRowIndex][j] || 0) + (result[prevRowIndex][j - 1] || 0);
    }
  }

  return result;
};

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  return generate(rowIndex + 1)[rowIndex];
};

console.log(getRow(3));

module.exports = getRow;
