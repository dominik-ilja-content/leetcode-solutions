const {
  TreeNode,
  createBinarySearchTree,
} = require("../classes/BinarySearchTree");

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */

// Depth First Search - In Order
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

// Breadth First Search
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

console.log(
  rangeSumBST(createBinarySearchTree([22, 3, 9, 72, 45, 7, 11]), 4, 37)
);
