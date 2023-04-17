/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (matrix) {
  let sum = 0;

  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    const leftIndex = i;
    const rightIndex = row.length - i - 1;
    const leftCol = row[leftIndex];
    const rightCol = row[rightIndex];

    if (leftIndex === rightIndex) {
      sum += leftCol;
    } else {
      sum += leftCol + rightCol;
    }
  }

  return sum;
};

module.exports = diagonalSum;
