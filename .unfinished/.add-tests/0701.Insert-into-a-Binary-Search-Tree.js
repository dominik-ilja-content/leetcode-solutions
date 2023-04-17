const { createBinarySearchTree } = require("../classes/BinarySearchTree");
const { TreeNode } = require("../classes/BinarySearchTree");

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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
  const newNode = new TreeNode(val);
  let currentNode = root;

  if (currentNode === null) return newNode;

  while (true) {
    if (currentNode.val > newNode.val) {
      if (currentNode.left === null) {
        currentNode.left = newNode;
        break;
      }

      currentNode = currentNode.left;
    } else if (currentNode.val < newNode.val) {
      if (currentNode.right === null) {
        currentNode.right = newNode;
        break;
      }

      currentNode = currentNode.right;
    }
  }

  return root;
};

console.log(insertIntoBST(createBinarySearchTree([4, 2, 7, 1, 3]), 5));
console.log(insertIntoBST(null, 5));
