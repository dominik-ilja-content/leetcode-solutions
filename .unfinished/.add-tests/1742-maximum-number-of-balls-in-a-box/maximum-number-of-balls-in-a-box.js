function sumDigits(num) {
  const numStr = num.toString();
  let sum = 0;

  for (let i = 0; i < numStr.length; i++) {
    sum += parseInt(numStr[i]);
  }

  return sum;
}

/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function (lowLimit, highLimit) {
  const map = {};
  let highest = 1;

  for (let i = lowLimit; i <= highLimit; i++) {
    let digitSum = sumDigits(i);
    let count = null;

    if (map[digitSum] !== undefined) {
      count = map[digitSum] += 1;
    } else {
      count = map[digitSum] = 1;
    }

    if (count > highest) {
      highest = count;
    }
  }

  return highest;
};

module.exports = countBalls;
