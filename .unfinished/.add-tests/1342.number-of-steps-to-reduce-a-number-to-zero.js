/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  let remainder = num;
  let steps = 0;

  while (remainder > 0) {
    if (remainder % 2 === 0) {
      remainder /= 2;
    }
    else {
      remainder -= 1;
    }

    steps += 1;
  }

  return steps;
};
