/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (map[num] === undefined)
      map[num] = 1;
    else
      return true;
  }

  return false;
};
