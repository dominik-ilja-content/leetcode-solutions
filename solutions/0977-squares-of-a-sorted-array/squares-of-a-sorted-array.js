/**
 * @param {number[]} nums
 * @return {number[]}
 */

var sortedSquares = function (nums) {
  const squares = [];
  let left = 0,
    right = (index = nums.length - 1);

  while (index >= 0) {
    const leftSquare = nums[left] ** 2,
      rightSquare = nums[right] ** 2;

    if (leftSquare > rightSquare) {
      squares[index] = leftSquare;
      left += 1;
    } else {
      squares[index] = rightSquare;
      right -= 1;
    }

    index -= 1;
  }

  return squares;
};

module.exports = sortedSquares;
