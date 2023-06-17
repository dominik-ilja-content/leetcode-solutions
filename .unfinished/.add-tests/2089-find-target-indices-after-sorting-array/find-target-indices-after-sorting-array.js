/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function (nums, target) {
  nums.sort((a, b) => a - b);

  const output = [];
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (nums[middle] === target) {
      let idx = middle;
      while (nums[idx] === target && nums[idx - 1] === target) {
        idx -= 1;
      }
      while (nums[idx] === target) {
        output.push(idx);
        idx += 1;
      }

      break;
    }
    if (nums[middle] > target) {
      right = middle - 1;
    }
    if (nums[middle] < target) {
      left = middle + 1;
    }
  }

  return output;
};

module.exports = targetIndices;
