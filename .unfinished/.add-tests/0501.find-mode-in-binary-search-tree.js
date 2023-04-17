const {
  TreeNode,
  createBinarySearchTree,
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
 * @return {number[]}
 */
var findMode = function (root) {
  const map = {};
  let result = [];
  let largest = 0;

  function search(root) {
    if (root == null) return;

    const value = root.val;

    map[value] == undefined ? (map[value] = 1) : (map[value] += 1);

    search(root.left);
    search(root.right);
  }

  search(root);

  for (let key in map) {
    const value = map[key];

    if (value >= largest) {
      if (value > largest) {
        result = [];
        largest = value;
      }

      result.push(parseInt(key));
    }
  }

  return result;
};

/*

  Perform a depth first search in order on the binary search tree.
  Compare the previous value of the node with the current and increment count if they match.
  If the count is greater than the max reset our result array with the new value.
  If the count matches the current max add the value to the result array.

*/

var findMode = function (root) {
  let result = [];
  let prev = root;
  let count = 0;
  let max = 0;

  function traverse(node) {
    if (node === null) return;

    traverse(node.left);

    count = prev.val === node.val ? count + 1 : 1;
    prev = node;

    if (count === max) {
      result.push(node.val);
    } else if (count > max) {
      max = count;
      result = [node.val];
    }

    traverse(node.right);
  }

  traverse(root);
  return result;
};

/*

  After we've reached the end of a branch (hit null) is when
  we will make comparisons to see if the current and previous values
  match each other.

*/

const tree = new TreeNode(1, null, new TreeNode(2, new TreeNode(2), null));
const tree2 = new TreeNode(1, null, new TreeNode(2, null, null));

[18, 22, 25, 33, 33, 33, 37, 50, 59, 63, 63, 63, 64, 72, 79];

const tree3 = new TreeNode(
  50,
  new TreeNode(
    33,
    new TreeNode(22, new TreeNode(18), new TreeNode(25)),
    new TreeNode(33, new TreeNode(33), new TreeNode(37))
  ),
  new TreeNode(
    63,
    new TreeNode(63, new TreeNode(59), new TreeNode(63)),
    new TreeNode(72, new TreeNode(64), new TreeNode(79))
  )
);

console.log(findMode(tree));
console.log(findMode(tree2));
console.log(findMode(tree3));
