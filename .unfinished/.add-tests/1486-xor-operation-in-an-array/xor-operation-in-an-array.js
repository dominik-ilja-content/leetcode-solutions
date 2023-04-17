/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n, start) {
  let prev = null;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    let result = start + 2 * i;
    if (!prev) {
      sum = prev = result;
    } else {
      sum ^= result;
    }
  }

  return sum;
};

console.log(xorOperation(5, 0));
console.log(xorOperation(4, 3));

module.exports = xorOperation;
