const { TreeNode } = require("../../data_structures/Trees");

/* Recursive */

/*
    We build up the sum of the paths as we traverse down.
    If we hit a leaf we see if total of the path matches the targetSum.
    If the total matches the targetSum that true value will
    bubble up and be returned.
*/

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  function traverse(node, total) {
    if (node === null) {
      return false;
    }
    if (node.left === null && node.right === null) {
      return total + node.val === targetSum;
    }

    return (
      traverse(node.left, total + node.val) ||
      traverse(node.right, total + node.val)
    );
  }
  return traverse(root, 0);
};

/* Iterative */

/*

*/

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  const stack = [];
  let previous = null;
  let sum = 0;

  while (root !== null || stack.length > 0) {
    if (root !== null) {
      stack.push(root);
      root = root.left;
    } else {
      root = stack[stack.length - 1];

      if (root.right === null) {
      }
      break;
    }
  }

  return false;
};

module.exports = hasPathSum;
