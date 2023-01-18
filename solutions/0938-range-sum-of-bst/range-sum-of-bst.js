const {
  TreeNode,
  createBinarySearchTree,
} = require("../../data_structures/Trees/Trees");

/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */

// Depth First Search - In Order (Recursion)
var rangeSumBST = function (root, low, high) {
  let sum = 0;

  function traverse(root) {
    if (root === null) return;

    traverse(root.left);

    if (root.val >= low && root.val <= high) {
      sum += root.val;
    }

    traverse(root.right);
  }
  traverse(root);

  return sum;
};

// Breadth First Search (Iterative)

/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
  const stack = [root];
  let sum = 0;

  while (stack.length !== 0) {
    const { val, left, right } = stack.pop();

    if (val >= low && val <= high) {
      sum += val;
    }

    if (left) stack.push(left);
    if (right) stack.push(right);
  }

  return sum;
};

module.exports = rangeSumBST;
