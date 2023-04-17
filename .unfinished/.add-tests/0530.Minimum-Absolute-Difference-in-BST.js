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
 * @return {number}
 */
var getMinimumDifference = function (root) {
  let min = Infinity;
  let prev = null;

  function traverse(node) {
    if (node === null) return;

    traverse(node.left);

    if (prev !== null) {
      const result = Math.abs(node.val - prev.val);
      if (result < min) min = result;
    }

    prev = node;

    traverse(node.right);
  }

  traverse(root);
  return min;
};

/*

  Depth first search - in order will return the elements in a sorted manor.
  We can then subtract the previous node with our current. Since there sorted
  the numbers next to each other will be the closet in value.

*/

console.log(getMinimumDifference(createBinarySearchTree([4, 2, 6, 1, 3]))); // 1
console.log(getMinimumDifference(createBinarySearchTree([1, 0, 48, 12, 49]))); // 1
console.log(getMinimumDifference(createBinarySearchTree([1, 3, 2]))); // 1
