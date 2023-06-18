/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function (nums) {
  if (nums.length <= 2) return -1;

  nums.sort((a, b) => a - b);

  return nums[1];
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function (nums) {
  if (nums.length <= 2) return -1;

  let min = Infinity;
  let match = null;
  let max = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (num < min) {
      match = min;
      min = num;
    }
    if (num > max) {
      match = max;
      max = num;
    }
    if (num < max && num > min) {
      match = num;
    }
  }

  return match;
};

module.exports = findNonMinOrMax;
