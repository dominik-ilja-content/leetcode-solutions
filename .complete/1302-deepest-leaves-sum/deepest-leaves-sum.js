const { TreeNode } = require("../../../data_structures/Trees");

/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function (root) {
  let sum = 0;
  let deepestLevel = 1;

  function traverse(root, level) {
    if (!root.left && !root.right) {
      if (level === deepestLevel) {
        sum += root.val;
      } else if (level > deepestLevel) {
        deepestLevel = level;
        sum = root.val;
      }
      return;
    }

    if (root.left) traverse(root.left, level + 1);
    if (root.right) traverse(root.right, level + 1);
  }
  traverse(root, deepestLevel);

  return sum;
};

module.exports = deepestLeavesSum;
