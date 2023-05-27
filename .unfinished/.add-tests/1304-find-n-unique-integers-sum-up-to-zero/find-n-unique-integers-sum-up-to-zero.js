/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function (n) {
  const output = [];
  let length = n;
  let lengthIsOdd = false;

  if (n % 2 !== 0) {
    lengthIsOdd = true;
    length = n - 1;
  }

  for (let i = 0; i < length / 2; i++) {
    const value = n - i;
    output.push(value, value * -1);
  }

  if (lengthIsOdd) {
    output.push(0);
  }

  return output;
};

/*
  all integers need to be unique in output array

  n = 5
  -5, 5 = 0
  -4, 4 = 0
  0 = 0

  if odd make the center element 0
  [-5, -4, 0, 4, 5]
*/

console.log(sumZero(5)); // [-7, -1, 1, 3, 4]

module.exports = sumZero;
