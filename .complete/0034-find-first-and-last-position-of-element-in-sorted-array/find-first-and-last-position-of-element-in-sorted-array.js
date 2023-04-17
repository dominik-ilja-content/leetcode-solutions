/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  // finds the leftmost index of the number we're trying to find
  function find(numberToFind = target, left = 0, right = nums.length) {
    while (left <= right) {
      const middle = Math.trunc((left + right) / 2);
      if (nums[middle] < numberToFind) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }

    return left;
  }

  const leftTargetIndex = find();

  if (nums[leftTargetIndex] !== target) {
    return [-1, -1];
  }

  // 1. Making the target bigger by 1 will put the found index
  // just after the range of our target
  const rightTargetIndex = find(target + 1, leftTargetIndex);

  // 2. we subtract one from the rightTargetIndex to correct for making our
  // search target bigger by 1
  return [leftTargetIndex, rightTargetIndex - 1];
};

module.exports = searchRange;
