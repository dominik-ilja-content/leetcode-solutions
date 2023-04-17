/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
  const result = [];

  for (let i = 0, freq, val, idx; i < nums.length / 2; i++) {
    idx = i * 2;
    freq = nums[idx];
    val = nums[idx + 1];

    for (let j = 0; j < freq; j++) {
      result.push(val);
    }
  }

  return result;
};
