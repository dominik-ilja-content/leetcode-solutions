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
 * @return {TreeNode}
 */
var bstToGst = function (root) {
  let sum = 0;

  function traverse(node) {
    if (node === null) return;

    traverse(node.right);

    temp = node.val;
    node.val += sum;
    sum += temp;

    traverse(node.left);
  }

  traverse(root);
  return root;
};

console.log(bstToGst(createBinarySearchTree([4, 1, 6, 0, 2, 5, 7, 3, 8])));
