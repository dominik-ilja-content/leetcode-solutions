const { TreeNode } = require("../../data_structures/Trees");

/* RECURSIVE SOLUTION */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (root === null) return 0;

  function depth(node) {
    if (node.left === null && node.right === null) return 1;
    if (node.left && node.right === null) return depth(node.left) + 1;
    if (node.right && node.left === null) return depth(node.right) + 1;

    const leftDepth = depth(node.left) + 1;
    const rightDepth = depth(node.right) + 1;

    return Math.min(leftDepth, rightDepth);
  }

  return depth(root);
};

/* ITERATIVE SOLUTION */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (root === null) return 0;

  const stack = [root];
  const depths = new Map();

  while (stack.length > 0) {
    const node = stack[stack.length - 1];

    // move to left
    if (node.left !== null && !depths.has(node.left)) {
      stack.push(node.left);
    }
    // move to right
    else if (node.right !== null && !depths.has(node.right)) {
      stack.push(node.right);
    }
    // These conditions set values and removes the current node from the stack
    else {
      if (depths.has(node.left) && depths.has(node.right)) {
        const depth = Math.min(depths.get(node.left), depths.get(node.right));
        depths.set(node, depth + 1);
      } else if (depths.has(node.left) && !depths.has(node.right)) {
        depths.set(node, depths.get(node.left) + 1);
      } else if (depths.has(node.right) && !depths.has(node.leftt)) {
        depths.set(node, depths.get(node.right) + 1);
      }
      // end of brach set value to 1 for node
      else {
        depths.set(node, 1);
      }

      stack.pop();
    }
  }

  return depths.get(root);
};

module.exports = minDepth;
