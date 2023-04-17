const { TreeNode, createBinarySearchTree } = require("../classes/BinarySearchTree");

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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const values = [];

  if (root == null) return values;

  function traverse(node) {
    if (node.left) traverse(node.left);
    values.push(node.val);
    if (node.right) traverse(node.right);
  }
  traverse(root);

  return values;
};

console.log(inorderTraversal(createBinarySearchTree([1, 2, 3])));
