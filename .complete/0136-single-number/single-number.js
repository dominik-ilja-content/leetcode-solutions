/* Brute Force */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let pair = false;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j] && i !== j) {
        pair = true;
        break;
      }
    }

    if (!pair) {
      return nums[i];
    }
  }
};

/* Hash Map */
var singleNumber = function (nums) {
  if (nums.length === 1) return nums[0];

  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    }
    else {
      map.set(num, 1);
    }
  }

  const entries = map.entries();

  for (let entry of entries) {
    const [key, value] = entry;
    if (value === 1) {
      return key;
    }
  }
};

/* Bitwise */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {
    result ^= nums[i];
  }

  return result;
};

module.exports = singleNumber;
