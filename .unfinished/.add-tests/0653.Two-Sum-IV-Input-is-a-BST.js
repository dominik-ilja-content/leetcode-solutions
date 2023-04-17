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
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, target) {
  const pairs = {};
  const stack = [root];

  while (stack.length > 0) {
    const { val, left, right } = stack.pop();
    const pair = target - val;

    if (pairs[pair]) {
      return true;
    } else {
      pairs[val] = true;
    }

    if (left) stack.push(left);
    if (right) stack.push(right);
  }

  return false;
};

/*

  I used breadth first search so that I would be able to break out of the function immediately
  if I found a match.

*/

console.log(findTarget(createBinarySearchTree([5, 3, 6, 2, 4, 7]), 9)); // true
console.log(findTarget(createBinarySearchTree([5, 3, 6, 2, 4, 7]), 28)); // false
