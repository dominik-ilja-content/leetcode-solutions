/**
 * @param {number} num
 * @return {boolean}
 */
function isSelfDividing(num) {
  const digits = num.toString();

  for (let i = 0; i < digits.length; i++) {
    const digit = parseInt(digits[i]);
    if (num % digit !== 0) {
      return false;
    }
  }

  return true;
}

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  const output = [];
  for (let i = left; i <= right; i++) {
    if (isSelfDividing(i)) {
      output.push(i);
    }
  }
  return output;
};

module.exports = selfDividingNumbers;
