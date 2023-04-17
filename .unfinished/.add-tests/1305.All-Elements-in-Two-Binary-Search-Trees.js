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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function (root1, root2) {
  const values = [];

  function traverse(node) {
    if (node === null) return;

    traverse(node.left);
    values.push(node.val);
    traverse(node.right);
  }
  traverse(root1);
  traverse(root2);

  return values.sort((a, b) => a - b);
};

console.log(
  getAllElements(
    createBinarySearchTree([2, 1, 4]),
    createBinarySearchTree([1, 0, 3])
  )
);
