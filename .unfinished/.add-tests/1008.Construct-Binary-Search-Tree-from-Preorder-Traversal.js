const {
  createBinarySearchTree,
  TreeNode,
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var bstFromPreorder = function (nums) {
  let root = null;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const newNode = new TreeNode(num);

    if (root === null) {
      root = newNode;
    } else {
      let currNode = root;

      while (true) {
        if (newNode.val < currNode.val) {
          if (currNode.left === null) {
            currNode.left = newNode;
            break;
          } else {
            currNode = currNode.left;
          }
        } else if (newNode.val > currNode.val) {
          if (currNode.right === null) {
            currNode.right = newNode;
            break;
          } else {
            currNode = currNode.right;
          }
        }
      }
    }
  }

  return root;
};

console.log(bstFromPreorder([8, 5, 1, 7, 10, 12]));
