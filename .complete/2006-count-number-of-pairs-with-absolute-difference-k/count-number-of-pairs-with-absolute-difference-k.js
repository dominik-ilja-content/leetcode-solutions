/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function (nums, k) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const diff = Math.abs(nums[i] - nums[j]);
      if (diff === k) count += 1;
    }
  }
  return count;
};

// we have num - k and num + k because the diff can go in both directions

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function (nums, k) {
  const map = {};
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    map[num] === undefined ? (map[num] = 1) : (map[num] += 1);

    if (map[num - k]) count += map[num - k];
    if (map[num + k]) count += map[num + k];
  }

  return count;
};

module.exports = countKDifference;
