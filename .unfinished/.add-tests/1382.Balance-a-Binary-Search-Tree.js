const { TreeNode } = require("../classes/BinarySearchTree");

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
var balanceBST = function (root) {
  const values = [];

  function dfsInOrder(node) {
    if (node === null) return;

    dfsInOrder(node.left);

    values.push(node.val);

    dfsInOrder(node.right);
  }
  dfsInOrder(root);

  function buildTree(start, end) {
    if (start > end) return null;

    const mid = Math.ceil((start + end) / 2);
    const root = new TreeNode(values[mid]);

    root.left = buildTree(start, mid - 1);
    root.right = buildTree(mid + 1, end);

    return root;
  }

  return buildTree(0, values.length - 1);
};

const tree = new TreeNode(
  1,
  null,
  new TreeNode(2, null, new TreeNode(3, null, new TreeNode(4)))
);

console.log(balanceBST(tree));
