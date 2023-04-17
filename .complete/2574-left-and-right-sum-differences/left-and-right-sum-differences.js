/*

  Index is equal to absolute value of leftSum[i] - rightSum[i]
  leftSum is the sum of all the elemnts to the left of the index in nums
  rightSum is the sum of all the elemnts to the right of the index in nums

  nums = [10,4,8,3]
  ---

  i = 0
  leftSum = [0] None to the left
  rightSum = [15] 4 + 8 + 3
  answer[i] = 0 - 15

  ---

  i = 1
  leftSum = [10] 10
  rightSum = [11] 8 + 3

  ---

  i = 2
  leftSum = [14] 10 + 4
  rightSum = [3] 3

  ---

  i = 3
  leftSum = [10] 10 + 4 + 8
  rightSum = [0] None to the right

  ---

  Time: O(n)
  Space: O(n)
*/

/*
    We could have two pointers that both get the sums for the individual arrays
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRigthDifference = function (nums) {
  const answer = [0];

  for (let i = 1; i < nums.length; i++) {
    const prevIndex = i - 1;
    answer[i] = nums[prevIndex] + answer[prevIndex];
  }

  let rightSum = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    answer[i] = Math.abs(answer[i] - rightSum);
    rightSum += nums[i];
  }

  return answer;
};

module.exports = leftRigthDifference;
