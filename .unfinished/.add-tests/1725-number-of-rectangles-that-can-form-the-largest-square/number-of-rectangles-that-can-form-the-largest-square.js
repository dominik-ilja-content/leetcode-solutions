/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function (rectangles) {
  let max = 0; // 1 <= rectangles.length <= 1000
  let count = 0;

  for (let i = 0; i < rectangles.length; i++) {
    const maxSquare = Math.min(...rectangles[i]);

    if (maxSquare > max) {
      max = maxSquare;
      count = 1;
    } else if (maxSquare === max) {
      count += 1;
    }
  }

  return count;
};

console.log(
  countGoodRectangles([
    [5, 8],
    [3, 9],
    [5, 12],
    [16, 5],
  ])
); // 3

console.log(
  countGoodRectangles([
    [2, 3],
    [3, 7],
    [4, 3],
    [3, 7],
  ])
); // 3

module.exports = countGoodRectangles;
