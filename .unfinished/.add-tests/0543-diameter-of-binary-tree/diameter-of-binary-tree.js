const { TreeNode } = require("../../../data_structures/Trees");

/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let longestPath = 0;

  function dfs(node) {
    if (node.left === null && node.right === null) {
      return 0;
    }

    let leftSum = 0;
    let rightSum = 0;

    if (node.left !== null) {
      leftSum = dfs(node.left) + 1;
    }
    if (node.right !== null) {
      rightSum = dfs(node.right) + 1;
    }

    let pathSum = leftSum + rightSum;

    if (pathSum > longestPath) {
      longestPath = pathSum;
    }

    return leftSum > rightSum ? leftSum : rightSum;
  }
  dfs(root);

  return longestPath;
};

module.exports = diameterOfBinaryTree;
