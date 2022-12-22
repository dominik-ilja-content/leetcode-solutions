const { TreeNode } = require("../../data-structures/Trees");

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  function convert(start, end) {
    if (start > end) return null;

    const mid = Math.ceil((start + end) / 2);
    const root = new TreeNode(nums[mid]);
    root.left = convert(start, mid - 1);
    root.right = convert(mid + 1, end);

    return root;
  }

  return convert(0, nums.length - 1);
};

module.exports = sortedArrayToBST;
