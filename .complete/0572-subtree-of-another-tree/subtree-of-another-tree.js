const { TreeNode } = require("../../data_structures/Trees");

/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  function isSameTree(node1, node2) {
    if (node1 === null && node2 === null) {
      return true;
    }
    if (node1 === null || node2 === null) {
      return false;
    }
    if (node1.val !== node2.val) {
      return false;
    }

    return (
      isSameTree(node1.left, node2.left) && isSameTree(node1.right, node2.right)
    );
  }

  function dfs(node) {
    if (node === null) return false;

    if (node.val === subRoot.val) {
      if (isSameTree(node, subRoot)) {
        return true;
      }
    }

    return dfs(node.left) || dfs(node.right);
  }

  return dfs(root);
};

module.exports = isSubtree;
