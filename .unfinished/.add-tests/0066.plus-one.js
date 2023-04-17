// const chalk = require('chalk');
/* 
# COMPLETED 2022/09/08

You are given a large integer represented as an integer array digits, where each digits[i] 
is the ith digit of the integer. The digits are ordered from most significant to least 
significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.
 

Example 1:

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].

Example 2:

Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].

Example 3:

Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].
 

Constraints:

    1 <= digits.length <= 100
    0 <= digits[i] <= 9
    digits does not contain any leading 0's.
*/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
// var plusOne = function (digits) {
//   const copy = [...digits];
//   const lastIndex = copy.length - 1;
//   copy[lastIndex] += 1;

//   const result = [];
//   let i = lastIndex, carryOver = 0;

//   while (i >= 0 || carryOver > 0) {
//     const el = (copy[i] || 0) + carryOver;
//     carryOver = Math.floor(el / 10);
//     result.push(el % 10);
//     i -= 1;
//   }

//   let start = 0, end = result.length - 1;
//   while (start <= end) {
//     const temp = result[start];
//     result[start] = result[end];
//     result[end] = temp;

//     start += 1, end -= 1;
//   }
//   return result;
// };

/* 
  # ALTERNATE SOLUTION : https://www.youtube.com/watch?v=G737jzcxG9A&ab_channel=NickWhite
*/

var plusOne = function (digits) {

  const len = digits.length - 1;

  for (let i = len; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i] += 1;
      return digits;
    }

    digits[i] = 0;
  }

  return [1, ...digits];

};

module.exports = plusOne;
