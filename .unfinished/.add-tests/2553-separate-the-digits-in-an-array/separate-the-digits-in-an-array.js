/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function (nums) {
  const output = [];
  for (let i = 0; i < nums.length; i++) {
    const numStr = nums[i].toString();

    for (let j = 0; j < numStr.length; j++) {
      output.push(parseInt(numStr[j]));
    }
  }
  return output;
};

console.log(separateDigits([13, 25, 83, 77]));

module.exports = separateDigits;
