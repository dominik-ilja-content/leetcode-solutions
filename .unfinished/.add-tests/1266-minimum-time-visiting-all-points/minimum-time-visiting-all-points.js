/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function (points) {
  let output = 0;
  let [x, y] = points[0];

  for (let i = 1; i < points.length; i++) {
    const nextX = points[i][0];
    const nextY = points[i][1];
    const xTime = Math.abs(x - nextX);
    const yTime = Math.abs(y - nextY);
    output += Math.max(xTime, yTime);
    x = nextX;
    y = nextY;
  }

  return output;
};

// let seconds = 0;

// while (x !== points[i][0] || y !== points[i][1]) {

//   break;
// }

console.log(
  minTimeToVisitAllPoints([
    [1, 1],
    [3, 4],
    [-1, 0],
  ])
); // 7

console.log(
  minTimeToVisitAllPoints([
    [3, 2],
    [-2, 2],
  ])
); // 5

module.exports = minTimeToVisitAllPoints;
