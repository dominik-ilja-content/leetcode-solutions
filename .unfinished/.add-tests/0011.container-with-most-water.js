/* 

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

 

Example 1:

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

Example 2:

Input: height = [1,1]
Output: 1

 

Constraints:

    n == height.length
    2 <= n <= 105
    0 <= height[i] <= 104



*/

/**
 * @param {number[]} heights
 * @return {number}
 */
var maxArea = function (heights) {
  let max = -Infinity, left = 0, right = heights.length - 1;

  while (left < right) {
    let colSpan = right - left, rowSpan = Math.min(heights[left], heights[right]);
    max = Math.max(colSpan * rowSpan, max);

    heights[left] > heights[right] ? right -= 1 : left += 1;
  }

  return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));
console.log(maxArea([1, 22, 22, 1]));
console.log(maxArea([99, 9]));
