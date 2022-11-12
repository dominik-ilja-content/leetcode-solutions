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

// console.log(sortedSquares([100, 200, 10, 4, -2])); // [ 4, 16, 100, 40000, 10000 ]
// console.log(sortedSquares([-200, -100, 5, 91, 99])); // [ 25, 8281, 9801, 10000, 40000 ]
