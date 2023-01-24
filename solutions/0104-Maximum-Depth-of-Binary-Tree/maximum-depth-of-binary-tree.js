const { TreeNode } = require("../../data_structures/Trees/Trees");

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  function traverse(node, depth) {
    if (node === null) return depth;

    const leftDepth = traverse(node.left, depth + 1);
    const rightDepth = traverse(node.right, depth + 1);

    return Math.max(leftDepth, rightDepth);
  }

  return traverse(root, 0);
};

module.exports = maxDepth;
