const { TreeNode } = require("../../data_structures/Trees/Trees");

/*
  Guaranteed to have at least one node.
*/

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  function validate(node, min, max) {
    if (node === null) return true;

    let validLeft = validate(node.left, min, node.val);
    let validRight = validate(node.right, node.val, max);
    let validChildren = validLeft && validRight;
    let withinRange = node.val > min && node.val < max;

    return validChildren && withinRange;
  }
  return validate(root, -Infinity, Infinity);
};

module.exports = isValidBST;
