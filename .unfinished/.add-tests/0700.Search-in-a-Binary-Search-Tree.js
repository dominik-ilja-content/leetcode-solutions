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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  const stack = [root];

  while (stack.length > 0) {
    const node = stack.pop();

    if (node.val === val) return node;
    if (node.left !== null) stack.push(node.left);
    if (node.right !== null) stack.push(node.right);
  }

  return null;
};

console.log(searchBST(createBinarySearchTree([4, 2, 7, 1, 3]), 2));
