const { TreeNode } = require("../../data_structures/Trees/Trees");

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  function compare(n1, n2) {
    if (n1 === null && n2 === null) return true;
    if (n1 === null || n2 === null) return false;

    if (n1.val === n2.val) {
      return compare(n1.left, n2.right) && compare(n2.left, n1.right);
    } else {
      return false;
    }
  }

  return compare(root.left, root.right);
};

module.exports = isSymmetric;
