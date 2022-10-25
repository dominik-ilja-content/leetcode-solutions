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
    // if it is return the indexes inside an array
    // else add the curr number as a key and its index as its value
    // that way we can return it later
    if (map[pair] !== undefined) {
      return [map[pair], i];
    } else {
      map[curr] = i;
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9)); // [ 0, 1 ]
console.log(twoSum([3, 2, 4], 6)); // [ 1, 2 ]
console.log(twoSum([3, 3], 6)); // [ 0, 1 ]
console.log(twoSum([1, 98, 7, 54, 2], 3)); // [ 0, 4 ]
