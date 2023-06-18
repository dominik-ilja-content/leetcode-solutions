/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function (num) {
  if (num < 10) return true;
  return num % 10 !== 0;
};

module.exports = isSameAfterReversals;
