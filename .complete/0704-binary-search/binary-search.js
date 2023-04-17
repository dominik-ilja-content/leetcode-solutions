/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let leftP = 0;
  let rightP = nums.length - 1;

  while (leftP <= rightP) {
    const middleP = Math.floor((leftP + rightP) / 2);
    const middle = nums[middleP];

    if (middle === target) {
      return middleP;
    } else if (middle > target) {
      rightP = middleP - 1;
    } else {
      leftP = middleP + 1;
    }
  }

  return -1;
};

module.exports = search;
