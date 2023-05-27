/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function (arr, a, b, c) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        const cond1 = Math.abs(arr[i] - arr[j]) <= a;
        const cond2 = Math.abs(arr[j] - arr[k]) <= b;
        const cond3 = Math.abs(arr[i] - arr[k]) <= c;

        if (cond1 && cond2 && cond3) {
          count += 1;
        }
      }
    }
  }

  return count;
};

module.exports = countGoodTriplets;
