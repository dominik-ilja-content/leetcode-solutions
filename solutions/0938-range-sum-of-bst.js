const {
  TreeNode,
  createBinarySearchTree,
} = require("../data-structures/Trees");

/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */

// Depth First Search - In Order (Recursion)
var rangeSumBST = function (root, low, high) {
  let sum = 0;

  function traverse(root) {
    if (root === null) return;

    traverse(root.left);

    if (root.val >= low && root.val <= high) {
      sum += root.val;
    }

    traverse(root.right);
  }
  traverse(root);

  return sum;
};

// Breadth First Search (Iterative)
var rangeSumBST = function (root, low, high) {
  const stack = [root];
  let sum = 0;

  while (stack.length !== 0) {
    const { val, left, right } = stack.pop();

    if (val >= low && val <= high) {
      sum += val;
    }

    if (left) stack.push(left);
    if (right) stack.push(right);
  }

  return sum;
};

// const space = "  ";
// console.log(
//   JSON.stringify(
//     rangeSumBST(createBinarySearchTree([10, 5, 15, 3, 7, 18]), 7, 15),
//     null,
//     space
//   )
// ); // 32

// console.log(
//   JSON.stringify(
//     rangeSumBST(createBinarySearchTree([10, 5, 15, 3, 7, 13, 18, 1, 6]), 6, 10),
//     null,
//     space
//   )
// ); // 23

// console.log(
//   JSON.stringify(
//     rangeSumBST(createBinarySearchTree([22, 3, 9, 72, 45, 7, 11]), 4, 37),
//     null,
//     space
//   )
// ); // 49
