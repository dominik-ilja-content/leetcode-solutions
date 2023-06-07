/* We are guaranteed to have a 1 by 1 matrix */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  function helper(matrix, top, right, bottom, left) {
    if (left < right - 1 && top < bottom - 1) {
      helper(matrix, top + 1, right - 1, bottom - 1, left + 1);
    } else {
      return;
    }

    for (let i = left; i < right - 1; i++) {
      let sidesToSwap = 4; // matrix side count
      let col = i;
      let row = top;
      let previous = matrix[row][col]; // will be used to remember previous value

      while (sidesToSwap > 0) {
        let places = right - left - 1; // places to move to next swap index

        while (places > 0) {
          while (col < right - 1 && row === top && places > 0) {
            col += 1;
            places -= 1;
          }
          while (row < bottom - 1 && col === right - 1 && places > 0) {
            row += 1;
            places -= 1;
          }
          while (col > left && row === bottom - 1 && places > 0) {
            col -= 1;
            places -= 1;
          }
          while (row > top && col === left && places > 0) {
            row -= 1;
            places -= 1;
          }
        }

        let temp = matrix[row][col];
        matrix[row][col] = previous;
        previous = temp;

        sidesToSwap -= 1;
      }
    }
  }

  helper(matrix, 0, matrix.length, matrix.length, 0);
};

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
matrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];
// matrix = [
//   [1, 2],
//   [3, 4],
// ];
// matrix = [[1]];
rotate(matrix);
console.log(matrix);

module.exports = rotate;
