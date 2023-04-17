/**
 * @param {number} n
 * @return {boolean}
 */

/* Recursion */
var isPowerOfTwo = function (n) {
  if (n < 1) return false;
  if (n === 1) return true;

  return isPowerOfTwo(n / 2);
};

/* Iteration */
var isPowerOfTwo = function (n) {
  if (n < 1) return false;

  while (n > 1) {
    n /= 2;
  }

  return n === 1;
};

/* Bit Manipulation */
var isPowerOfTwo = function (n) {
  return n > 0 && (n & (n - 1)) === 0;
};

console.log(isPowerOfTwo(2));

module.exports = isPowerOfTwo;
