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
