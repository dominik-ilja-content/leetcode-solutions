const { TreeNode } = require("../../data_structures/Trees");

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  function traverse(root, level, matrix) {
    if (root === null) return matrix;
    if (matrix[level] === undefined) {
      matrix[level] = [root.val];
    } else {
      matrix[level].push(root.val);
    }

    if (root.left !== null) {
      traverse(root.left, level + 1, matrix);
    }
    if (root.right !== null) {
      traverse(root.right, level + 1, matrix);
    }

    return matrix;
  }
  return traverse(root, 0, []);
};

module.exports = levelOrder;
