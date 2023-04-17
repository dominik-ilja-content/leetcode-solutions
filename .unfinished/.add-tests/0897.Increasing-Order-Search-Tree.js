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
 * @return {TreeNode}
 */
/*

  DFS - In order
  Get the elements in order and create the new tree. Once we have a root node for our
  new tree, we can simply add each new element we touch to the tree's right

*/
var increasingBST = function (root) {
  let tree = null;
  let currNode = null;

  function traverse(node) {
    if (node === null) return;

    traverse(node.left);

    const treeNode = new TreeNode(node.val);
    if (tree === null) {
      currNode = tree = treeNode;
    } else {
      currNode = currNode.right = treeNode;
    }

    traverse(node.right);
  }

  traverse(root);
  return tree;
};

console.log(increasingBST(createBinarySearchTree([5, 3, 6, 2, 4, 8, 1, 7, 9])));
