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

module.exports = maxArea;