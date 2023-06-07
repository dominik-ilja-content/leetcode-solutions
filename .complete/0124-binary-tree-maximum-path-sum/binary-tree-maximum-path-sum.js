const { TreeNode } = require("../../data_structures/Trees");

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
  let maxSum = -Infinity;

  function dfs(node) {
    if (node === null) return 0;

    let left = dfs(node.left);
    let right = dfs(node.right);
    let leftSum = left + node.val;
    let rightSum = right + node.val;
    let comboSum = left + right + node.val;
    let max = Math.max(leftSum, rightSum, comboSum, node.val);

    if (max > maxSum) maxSum = max;

    return Math.max(leftSum, rightSum, node.val);
  }
  dfs(root);

  return maxSum;
};

module.exports = maxPathSum;
