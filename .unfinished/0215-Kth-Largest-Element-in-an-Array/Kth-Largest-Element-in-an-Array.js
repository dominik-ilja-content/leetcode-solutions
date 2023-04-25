/*
  We know that an array the is empty or has one element is sorted - X
*/

/* Sorting the Array */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  nums.sort((a, b) => b - a);
  return nums[k - 1];
};

class Heap {}

/* Max Heap */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {};

module.exports = findKthLargest;
