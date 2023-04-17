/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let hasSwapped = false;

  // start at end of the array
  for (let i = nums.length - 1; i >= 1; i--) {
    // is current index greater than the index before it
    if (nums[i] > nums[i - 1]) {
      let bestDiff = -Infinity;
      let bestDiffIdx = -1;

      // compare all values to right of "i - 1" and get
      // a negative comparison that is closest to zero
      for (let j = i; j < nums.length; j++) {
        const diff = nums[i - 1] - nums[j];

        if (diff < 0 && diff > bestDiff) {
          bestDiff = diff;
          bestDiffIdx = j;
        }
      }

      // swap index of nums[i - 1] with diffIdx
      const temp = nums[i - 1];
      nums[i - 1] = nums[bestDiffIdx];
      nums[bestDiffIdx] = temp;

      // sort numbers after nums[i-1] in ascending order
      for (let j = i; j < nums.length; j++) {
        for (let k = j; k < nums.length; k++) {
          if (nums[j] > nums[k]) {
            const temp = nums[j];
            nums[j] = nums[k];
            nums[k] = temp;
          }
        }
      }

      hasSwapped = true;
      break;
    }
  }

  // reverse array if no swaps occurred
  if (!hasSwapped) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
      const temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;
      left += 1;
      right -= 1;
    }
  }
};

module.exports = nextPermutation;
