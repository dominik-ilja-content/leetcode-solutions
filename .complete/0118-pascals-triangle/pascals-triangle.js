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
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const matrix = [];

  for (let rowIdx = 0; rowIdx < numRows; rowIdx++) {
    const row = [];

    for (let colIdx = 0; colIdx < rowIdx + 1; colIdx++) {
      if (colIdx === 0 || colIdx === rowIdx) {
        row.push(1);
      } else {
        const prevRow = matrix[rowIdx - 1];
        row.push(prevRow[colIdx - 1] + prevRow[colIdx]);
      }
    }

    matrix.push(row);
  }

  return matrix;
};

console.log(generate(5));

module.exports = generate;
