/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  if (x === 0) return 0;

  const MAX_INT = 2147483647;
  const MIN_INT = -2147483648;
  let num = x;
  let digits = 1;
  let reverse = null;

  while (num !== 0) {
    let remainder = num % 10;
    num = Math.trunc(num / 10);

    if (reverse === null) {
      reverse = remainder;
      digits = 10;
    } else {
      reverse = reverse * digits + remainder;
    }

    if (reverse > MAX_INT || reverse < MIN_INT) {
      reverse = 0;
      break;
    }
  }

  return reverse;
};

module.exports = reverse;
