const { createBinarySearchTree } = require("../classes/BinarySearchTree");
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let smallest = null;

  function traverse(node) {
    if (node === null) return;

    traverse(node.left);

    k -= 1;

    if (k === 0) {
      smallest = node;
    }
    if (k <= 0) return;

    traverse(node.right);
  }

  traverse(root);
  return smallest.val;
};

console.log(kthSmallest(createBinarySearchTree([3, 1, 4, 2]), 1));
