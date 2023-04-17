const TreeNode = require("../classes/BinarySearchTree").TreeNode;

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
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

console.log(sortedArrayToBST([0, 1, 2, 3, 4, 5]));
console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
