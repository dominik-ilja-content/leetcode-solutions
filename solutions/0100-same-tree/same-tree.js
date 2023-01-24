const { TreeNode, createBinaryTree } = require("../../data_structures/Trees");

/* RECURSIVE SOLUTION */

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (p === null && q === null) return true;
  if (p === null || q === null) return false;
  if (p.val !== q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

/* ITERATIVE SOLUTION */

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  const stack = [];
  let result = true;

  while (stack.length > 0 || p !== null || q !== null) {
    if (p === null && q === null) {
      const stackCall = stack.pop();
      p = stackCall[0].right;
      q = stackCall[1].right;
    } else if (p === null || q === null || p.val !== q.val) {
      result = false;
      break;
    } else {
      stack.push([p, q]);
      p = p.left;
      q = q.left;
    }
  }

  return result;
};

module.exports = isSameTree;
