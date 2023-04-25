/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const output = [];
  function helper(permutation, remainingNumbers) {
    if (remainingNumbers.length === 0) {
      output.push(permutation);
      return;
    }

    for (let i = 0; i < remainingNumbers.length; i++) {
      helper(
        [...permutation, remainingNumbers[i]],
        [...remainingNumbers.slice(0, i), ...remainingNumbers.slice(i + 1)]
      );
    }
  }
  helper([], nums);
  return output;
};

module.exports = permute;
