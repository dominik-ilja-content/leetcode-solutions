const { TreeNode } = require("../../data_structures/Trees/Trees");

/* RECURSIVE SOLUTION */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const result = [];

  function traverse(node) {
    if (node === null) return;

    traverse(node.left);
    result.push(node.val);
    traverse(node.right);
  }
  traverse(root);

  return result;
};

/* ITERATIVE SOLUTION */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const result = [];
  const stack = [];

  while (stack.length > 0 || root !== null) {
    // Add to stack and move to the left
    if (root !== null) {
      stack.push(root);
      root = root.left;
    }
    // capture value and move to the right
    else {
      root = stack.pop();
      result.push(root.val);
      root = root.right;
    }
  }

  return result;
};

module.exports = inorderTraversal;
