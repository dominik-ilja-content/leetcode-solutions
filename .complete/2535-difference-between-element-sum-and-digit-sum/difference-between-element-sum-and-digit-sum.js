/*
    Time complexity would be O(num_length * digit_length)
    Space complexity would be O(1)
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
  let elSum = 0;
  let digitSum = 0;

  for (let num of nums) {
    const numberHasMultipleDigits = num > 9;
    elSum += num;

    if (numberHasMultipleDigits) {
      const digits = num.toString();

      for (let digit of digits) {
        digitSum += Number(digit);
      }
    } else {
      digitSum += num;
    }
  }

  return elSum - digitSum;
};

module.exports = differenceOfSum;
