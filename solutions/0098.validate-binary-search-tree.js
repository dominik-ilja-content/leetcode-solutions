const {
  TreeNode,
  createTree,
  createBinarySearchTree,
} = require("../data-structures/Trees");

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/*

  Guaranteed to have at least one node.

*/

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  function validate(node, min, max) {
    if (node === null) return true;

    let validLeft = validate(node.left, min, node.val);
    let validRight = validate(node.right, node.val, max);
    let validChildren = validLeft && validRight;
    let withinRange = node.val > min && node.val < max;

    return validChildren && withinRange;
  }
  return validate(root, -Infinity, Infinity);
};

// console.log(isValidBST(new TreeNode(1))); // true

// let validTree = createBinarySearchTree([2, 1, 3]);
// let invalidTree = createTree([2, 3, 1]);
// console.log(isValidBST(validTree)); // true
// console.log(isValidBST(invalidTree)); // false

// validTree = createBinarySearchTree([5, 1, 6, 3, 4]);
// invalidTree = createTree([5, 1, 4, null, null, 3, 6]);
// console.log(isValidBST(validTree)); // true
// console.log(isValidBST(invalidTree)); // false

// validTree = createBinarySearchTree([9, 5, 15, 3, 8, 14, 22, 2, 7, 12, 16]);
// invalidTree = createTree([
//   9,
//   5,
//   15,
//   3,
//   8,
//   14,
//   22,
//   2,
//   4,
//   7,
//   null,
//   12,
//   null,
//   16,
//   16,
// ]);
// console.log(isValidBST(validTree)); // true
// console.log(isValidBST(invalidTree)); // false

// invalidTree = createTree([5, 4, 6, null, null, 3, 7]);
// console.log(isValidBST(invalidTree)); // false

// invalidTree = createTree([32, 26, 47, 19, null, null, 56, null, 27]);
// console.log(isValidBST(invalidTree)); // false

module.exports = isValidBST;
