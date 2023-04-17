/*

    dividend = 10, divisor = 3 => output = 3

    -2^31 <= dividend <= 2^31-1
    -2^31 <= dividend <= 2^31-1

    divisor != 0

*/

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  const MAX_32_BIT_INT = 2 ** 31 - 1;
  const MIN_32_BIT_INT = 2 ** 31 * -1;

  let output = 0;
  let temp_dividend = Math.abs(dividend);
  let temp_divisor = Math.abs(divisor);

  while (temp_dividend > 0) {
    temp_dividend -= temp_divisor;

    if (temp_dividend >= 0) {
      output += 1;
    }
  }

  if ((dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0)) {
    output = -output;
  }

  if (output > MAX_32_BIT_INT) output = MAX_32_BIT_INT;
  if (output < MIN_32_BIT_INT) output = MIN_32_BIT_INT;

  return output;
};

module.exports = divide;
