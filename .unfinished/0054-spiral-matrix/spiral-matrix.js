/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const output = [];
  let top = 0;
  let left = 0;
  let right = matrix[0].length;
  let bottom = matrix.length;

  while (left < right && top < bottom) {
    for (let i = left; i < right; i++) {
      output.push(matrix[top][i]);
    }
    top += 1;

    for (let i = top; i < bottom; i++) {
      output.push(matrix[i][right - 1]);
    }
    right -= 1;

    if (top === bottom || left === right) break;

    for (let i = right - 1; i >= left; i--) {
      output.push(matrix[bottom - 1][i]);
    }
    bottom -= 1;

    for (let i = bottom - 1; i >= top; i--) {
      output.push(matrix[i][left]);
    }
    left += 1;
  }

  return output;
};

let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
matrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];
matrix = [[7, 9, 6]];
matrix = [[7], [9], [6]];

console.log(spiralOrder(matrix)); // [1,2,3,4,8,12,11,10,9,5,6,7]

module.exports = spiralOrder;
