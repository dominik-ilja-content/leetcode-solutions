const { TreeNode } = require("../../data_structures/Trees");

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  if (nums.length === 0) return null;

  let maxIndex = null;
  let maxNum = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (num > maxNum) {
      maxIndex = i;
      maxNum = num;
    }
  }

  const node = new TreeNode(maxNum);
  node.left = constructMaximumBinaryTree(nums.slice(0, maxIndex));
  node.right = constructMaximumBinaryTree(nums.slice(maxIndex + 1));

  return node;
};

module.exports = constructMaximumBinaryTree;
