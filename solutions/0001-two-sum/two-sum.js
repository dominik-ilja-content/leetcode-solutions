/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // store numbers without pairs in map
  const map = {};

  // look at each of the values in nums
  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    const pair = target - curr;

    // check if the pair is in the map
    // if it is, return the indexes inside an array
    // else, add the curr number as a key and its index as its value
    // that way we can return it later
    if (map[pair] !== undefined) {
      return [map[pair], i];
    } else {
      map[curr] = i;
    }
  }

  return [];
};

module.exports = twoSum;
