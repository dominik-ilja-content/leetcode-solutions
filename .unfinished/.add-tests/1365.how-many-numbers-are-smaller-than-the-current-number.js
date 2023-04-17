/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  const ans = Array(nums.length).fill(0);

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i === j) continue;
      if (nums[i] > nums[j]) {
        ans[i] += 1;
      }
    }
  }

  return ans;
};
