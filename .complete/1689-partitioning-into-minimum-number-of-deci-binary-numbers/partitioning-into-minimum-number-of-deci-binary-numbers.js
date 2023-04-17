/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function (n) {
  let largestDigit = -Infinity;

  for (let i = 0; i < n.length; i++) {
    largestDigit = Math.max(largestDigit, parseInt(n[i]));
  }

  return largestDigit;
};

module.exports = minPartitions;
