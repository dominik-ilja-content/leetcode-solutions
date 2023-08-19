/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  const set = new Set();
  const output = Array(2);

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (set.has(num)) {
      output[0] = num;
    }
    set.add(num);
  }
  for (let i = 1; i <= nums.length; i++) {
    if (!set.has(i)) {
      output[1] = i;
      break;
    }
  }

  return output;
};

module.exports = findErrorNums;
