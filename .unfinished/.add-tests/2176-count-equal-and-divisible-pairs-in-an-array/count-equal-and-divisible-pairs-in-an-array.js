/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function (nums, k) {
  let output = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j] && (i * j) % k === 0) {
        output += 1;
      }
    }
  }

  return output;
};

console.log(countPairs([3, 1, 2, 2, 2, 1, 3], 2));
console.log(countPairs([1, 2, 3, 4], 1));

module.exports = countPairs;
