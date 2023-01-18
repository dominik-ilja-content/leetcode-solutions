const {
  TreeNode,
  createBinaryTree,
} = require("../../data_structures/Trees/Trees");

/* SOLUTION 1 - Hash Map */

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

/* SOLUTION 2 - In Order Depth First Search */

/**
 * @param {TreeNode} root
 * @return {number[]}
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

module.exports = findMode;
