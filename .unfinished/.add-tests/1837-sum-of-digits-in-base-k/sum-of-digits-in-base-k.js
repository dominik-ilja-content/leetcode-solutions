/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function (n, k) {
  const numStr = n.toString(k);
  let output = 0;
  for (let i = 0; i < numStr.length; i++) {
    output += parseInt(numStr[i]);
  }
  return output;
};

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function (n, k) {
  let output = 0;

  // find the power that is the largest but not greater than our current number
  let power = 0;

  while (k ** power <= n) {
    power += 1;
  }
  power -= 1;

  while (n > 0) {
    if (k ** power > n) {
      power -= 1;
      continue;
    }

    n -= k ** power;
    output += 1;
  }

  return output;
};

/*

  What would the expected result be for base 2 & 34
  100010

  Bases are simply powers digit slot = k^d

  How to convert 34 to base 3?
  81-27-9-3-1
  How to convert 34 to base 3?
  81-27-9-3-1
*/

console.log(sumBase(34, 6));
console.log(sumBase(10, 10));
console.log(sumBase(42, 2));

module.exports = sumBase;
