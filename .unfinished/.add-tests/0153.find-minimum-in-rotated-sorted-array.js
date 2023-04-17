/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let left = 0,
    right = nums.length - 1,
    result = nums[0];

  while (left <= right) {
    if (nums[left] < nums[right]) {
      result = Math.min(result, nums[left]);
      break;
    }

    let mid = Math.floor((left + right) / 2);
    result = Math.min(result, nums[mid]);

    if (nums[mid] >= nums[left]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
};

console.log(findMin([3, 4, 5, 1, 2]));
console.log(findMin([4, 5, 6, 7, 0, 1, 2]));
