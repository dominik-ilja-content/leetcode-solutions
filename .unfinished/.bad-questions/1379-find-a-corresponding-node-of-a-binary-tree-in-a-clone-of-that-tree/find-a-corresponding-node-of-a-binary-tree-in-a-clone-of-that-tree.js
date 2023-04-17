const { TreeNode } = require("../../../data_structures/Trees");

/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function (original, cloned, target) {
  let result = null;
  function traverse(original, cloned) {
    if (original === null || result !== null) return;
    if (original === target) {
      result = cloned;
      return;
    }

    traverse(original.left, cloned.left);
    traverse(original.right, cloned.right);
  }
  traverse(original, cloned);
  return result;
};

module.exports = getTargetCopy;
