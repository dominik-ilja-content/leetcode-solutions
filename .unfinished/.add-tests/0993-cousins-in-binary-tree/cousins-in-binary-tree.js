const { TreeNode } = require("../../../data_structures/Trees");

/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
  if (root.val === x || root.val === y) {
    return false;
  }

  let xParent = null;
  let xDepth = 0;
  let yParent = null;
  let yDepth = 0;

  function dfs(node, depth) {
    if (xParent !== null && yParent !== null) {
      return;
    }
    if (
      (node.left !== null && node.left.val === x) ||
      (node.right !== null && node.right.val === x)
    ) {
      xParent = node;
      xDepth = depth;
    }
    if (
      (node.left !== null && node.left.val === y) ||
      (node.right !== null && node.right.val === y)
    ) {
      yParent = node;
      yDepth = depth;
    }
    if (node.left !== null) {
      dfs(node.left, depth + 1);
    }
    if (node.right !== null) {
      dfs(node.right, depth + 1);
    }
  }
  dfs(root, 0);

  return xParent !== yParent && xDepth === yDepth;
};

module.exports = isCousins;
