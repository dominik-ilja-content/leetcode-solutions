const { TreeNode } = require("../../../data_structures/Trees");

/**
 * @param {TreeNode} root
 * @return {number}
 */
var findTilt = function (root) {
  let tiltSum = 0;

  // keep a running value of the tilt sums
  // keep an internal value of the subtree totals
  function dfs(node) {
    if (node === null) {
      return 0;
    }

    let leftSum = 0;
    let rightSum = 0;

    if (node.left !== null) {
      leftSum = dfs(node.left);
    }
    if (node.right !== null) {
      rightSum = dfs(node.right);
    }

    tiltSum += Math.abs(leftSum - rightSum);

    return leftSum + rightSum + node.val;
  }
  dfs(root);

  return tiltSum;
};

module.exports = findTilt;
