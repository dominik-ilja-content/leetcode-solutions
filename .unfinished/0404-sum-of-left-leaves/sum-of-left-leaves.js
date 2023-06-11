const { TreeNode } = require("../../data_structures/Trees");

/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  function dfs(node, nodeIsLeft) {
    if (node.left === null && node.right === null) {
      return nodeIsLeft ? node.val : 0;
    }

    let leftSum = 0;
    let rightSum = 0;

    if (node.left !== null) {
      leftSum = dfs(node.left, true);
    }
    if (node.right !== null) {
      rightSum = dfs(node.right, false);
    }

    return leftSum + rightSum;
  }
  return dfs(root, false);
};

module.exports = sumOfLeftLeaves;
