/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    let subtotal = 0;
    for (let j = i; j < arr.length; j++) {
      subtotal += arr[j];

      if ((i + j) % 2 === 0) {
        sum += subtotal;
      }
    }
  }

  return sum;
};

module.exports = sumOddLengthSubarrays;
