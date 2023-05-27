/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function (nums, diff) {
  let output = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    const iNum = nums[i];

    for (let j = i + 1; j < nums.length - 1; j++) {
      const jNum = nums[j];
      const firstDiff = jNum - iNum;

      if (firstDiff < diff) continue;
      if (firstDiff > diff) break;

      for (let k = j + 1; k < nums.length; k++) {
        const kNum = nums[k];
        const secondDiff = kNum - jNum;

        if (secondDiff < diff) continue;
        if (secondDiff === diff) output += 1;
        break;
      }
    }
  }

  return output;
};

module.exports = arithmeticTriplets;
