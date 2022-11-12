const { TreeNode, createTree } = require("../data-structures/Trees");

// SOLUTION using Hash Map
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

// SOLUTION using In Order Depth First Search

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

// let tree = createTree([1, null, 2, 2, null]);
// console.log(findMode(tree)); // [ 2 ]

// tree = createTree([1, null, 2]);
// console.log(findMode(tree)); // [ 1, 2 ]

// tree = createTree([50, 33, 63, 22, 33, 63, 72, 18, 25, 33, 37, 59, 63, 64, 79]);
// console.log(findMode(tree)); // [ 33, 63 ]
