/* Sliding Window */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let count = nums[0];
  let max = count;

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];

    if (num > count && count + num < num) {
      count = num;
    } else {
      count += num;
    }

    if (count > max) max = count;
  }

  return max;
};

/* Brute Force */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    let count = 0;

    for (let j = i; j < nums.length; j++) {
      let num = nums[j];
      count += num;
      if (count > max) max = count;
    }
  }

  return max;
};

module.exports = maxSubArray;
