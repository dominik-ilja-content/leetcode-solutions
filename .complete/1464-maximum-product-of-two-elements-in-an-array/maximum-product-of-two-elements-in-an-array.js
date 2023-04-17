/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let largest = 0;
  let secondLargest = 0;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest) {
      secondLargest = num;
    }
  }

  return (largest - 1) * (secondLargest - 1);
};

module.exports = maxProduct;
