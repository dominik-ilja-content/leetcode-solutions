/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function (nums) {
  nums.sort((a, b) => b - a);

  const len = nums.length;
  const first = nums[0];
  const second = nums[1];
  const secondToLast = nums[len - 2];
  const last = nums[len - 1];

  return first * second - secondToLast * last;
};

module.exports = maxProductDifference;
