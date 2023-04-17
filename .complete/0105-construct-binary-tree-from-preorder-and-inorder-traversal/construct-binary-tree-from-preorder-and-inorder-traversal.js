const { TreeNode } = require("../../data_structures/Trees");

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  let preorderIdx = 0;

  function search(start, end) {
    let root = null;

    for (let i = start; i < end; i++) {
      if (inorder[i] === preorder[preorderIdx]) {
        root = new TreeNode(inorder[i]);
        preorderIdx += 1;
        root.left = search(start, i);
        root.right = search(i + 1, end);
        break;
      }
    }

    return root;
  }

  return search(0, inorder.length);
};

module.exports = buildTree;
