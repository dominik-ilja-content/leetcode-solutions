/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function (nums, k) {
  let max = Math.max(...nums);
  let count = max;

  for (let i = 0; i < k - 1; i++) {
    max += 1;
    count += max;
  }

  return count;
};

module.exports = maximizeSum;
