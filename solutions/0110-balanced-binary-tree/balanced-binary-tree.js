const { TreeNode } = require("../../data_structures/Trees/Trees");

/* Solution 1: Recursive - Depth First Search */

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  let treeIsBalanced = true;

  function depth(node) {
    if (node === null) return 0;

    const leftDepth = depth(node.left) + 1;
    const rightDepth = depth(node.right) + 1;
    const depthDifference = Math.abs(leftDepth - rightDepth);

    if (depthDifference > 1) treeIsBalanced = false;

    return Math.max(leftDepth, rightDepth);
  }
  depth(root);

  return treeIsBalanced;
};

/* Solution 2: Iterative */

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (root === null) return true;

  const stack = [root];
  const depths = new Map();

  while (stack.length > 0) {
    let current = stack[stack.length - 1];

    if (current.left !== null && !depths.has(current.left)) {
      stack.push(current.left);
    } else if (current.right !== null && !depths.has(current.right)) {
      stack.push(current.right);
    } else {
      const leftDepth = current.left === null ? 0 : depths.get(current.left);
      const rightDepth = current.right === null ? 0 : depths.get(current.right);

      if (Math.abs(leftDepth - rightDepth) > 1) return false;

      const depth = Math.max(leftDepth, rightDepth) + 1;
      depths.set(current, depth);
      stack.pop();
    }
  }

  return true;
};

module.exports = isBalanced;
