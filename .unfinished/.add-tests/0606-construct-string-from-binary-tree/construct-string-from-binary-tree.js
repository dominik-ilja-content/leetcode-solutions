const { TreeNode } = require("../../../data_structures/Trees");

/**
 * @param {TreeNode} root
 * @return {string}
 */
var tree2str = function (root) {
  if (root.left === null && root.right === null) {
    return root.val.toString();
  }
  if (root.left !== null && root.right !== null) {
    return `${root.val}(${tree2str(root.left)})(${tree2str(root.right)})`;
  }
  if (root.left !== null) {
    return `${root.val}(${tree2str(root.left)})`;
  }
  if (root.right !== null) {
    return `${root.val}()(${tree2str(root.right)})`;
  }
};

module.exports = tree2str;
