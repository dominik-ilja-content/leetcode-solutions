const { TreeNode } = require("../../../data_structures/Trees");

/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumRootToLeaf = function (root) {
  let output = 0;

  function dfs(node, numStr) {
    if (node.left === null && node.right === null) {
      let sum = 0;
      for (let i = numStr.length - 1, exp = 0; i >= 0; i--, exp++) {
        if (numStr[i] === "1") {
          sum += 2 ** exp;
        }
      }
      output += sum;
    }
    if (node.left !== null) {
      dfs(node.left, numStr + node.left.val);
    }
    if (node.right !== null) {
      dfs(node.right, numStr + node.right.val);
    }
  }
  dfs(root, root.val.toString());

  return output;
};

module.exports = sumRootToLeaf;
