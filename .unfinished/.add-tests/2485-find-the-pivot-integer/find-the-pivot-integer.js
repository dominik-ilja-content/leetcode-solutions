/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function (n) {
  if (n === 1) return n;
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  let sum2 = 0;
  for (let i = n; i > 1; i--) {
    sum2 += i;

    if (sum === sum2) return i;
    if (sum2 > sum) break;

    sum -= i;
  }

  return -1;
};

// const map = {}
// let sum = 0;

// for (let i = 1; i<=n; i++) {
//   sum += i;
//   map[sum] = sum;
// }

// sum = 0;

// for (let i = n; i >= 0; i--) {
//   if (map[sum])
// }
console.log(pivotInteger(8));

module.exports = pivotInteger;
