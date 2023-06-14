const { TreeNode } = require("../../../data_structures/Trees");

/**
 * @param {TreeNode} root
 * @return {number}
 */
var findSecondMinimumValue = function (root) {
  let smallest = root.val;
  let second = Infinity;

  function dfs(node) {
    if (node === null) {
      return;
    }
    if (node.val > smallest && node.val < second) {
      second = node.val;
    }
    if (node.left !== null) {
      dfs(node.left);
    }
    if (node.right !== null) {
      dfs(node.right);
    }
  }
  dfs(root);

  return second === Infinity ? -1 : second;
};

module.exports = findSecondMinimumValue;
