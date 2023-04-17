/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // sort nums
  const target = 0, res = [];
  nums = nums.sort((a, b) => a - b);


  for (let i = 0; i < nums.length - 2; i++) {
    let base = nums[i], left = i + 1, right = nums.length - 1;

    // we don't want to have our base number be the same value that we've checked before.
    if (nums[i - 1] === base) continue;

    while (left < right) {
      let numL = nums[left],
        numR = nums[right],
        sum = base + numL + numR;

      if (sum < target) {
        left += 1;
      }
      else if (sum > target) {
        right -= 1;
      }
      else {
        res.push([base, numL, numR]);
        left += 1;

        // same logic as base number applies to left pointer. We don't want to use the same
        // value twice for a sum that works. This prevents duplicates.
        while (nums[left] === nums[left - 1] && left < right) {
          left += 1;
        }
      }
    }
  }

  return res;

};

console.log(threeSum([-3, 3, 4, -3, 1, 2])); // [-3, -3, 1, 2, 3, 4]
console.log(threeSum([-2, 0, 2, -2, 2, 0])); // [-2, -2, 0, 0, 2, 2]
