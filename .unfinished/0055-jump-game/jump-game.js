/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  const cache = {};

  function helper(nums, idx) {
    if (idx >= nums.length - 1) return true;

    for (let i = idx; i < idx + nums[idx]; i++) {
      const jumpIdx = i + 1;

      if (cache[jumpIdx] === undefined) {
        cache[jumpIdx] = helper(nums, jumpIdx);
      }

      if (cache[jumpIdx]) {
        return cache[jumpIdx];
      }
    }

    return false;
  }

  return helper(nums, 0);
};

var canJump = function (nums) {
  let lastIndex = nums.length - 1;

  for (let i = nums.length; i >= 0; i--) {
    if (i + nums[i] >= lastIndex) lastIndex = i;
  }

  return lastIndex == 0;
};

console.log(canJump([2]));
console.log(canJump([1, 2]));
console.log(canJump([2, 3, 1, 1, 4]));
console.log(canJump([3, 2, 1, 0, 4]));

module.exports = canJump;
