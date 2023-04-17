/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  if (nums.length <= 1) return false;

  const map = {};
  let result = false;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (map[num] === undefined) {
      map[num] = i;
    } else {
      // values are equal see if indexes are less than k
      if (Math.abs(i - map[num]) <= k) {
        result = true;
        break;
      } else {
        map[num] = i;
      }
    }
  }

  return result;
};

module.exports = containsNearbyDuplicate;
