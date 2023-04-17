const { TreeNode } = require("../../data_structures/Trees");
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  let postorderIdx = postorder.length - 1;

  function search(start, end) {
    let root = null;

    for (let i = start; i < end; i++) {
      if (inorder[i] === postorder[postorderIdx]) {
        root = new TreeNode(inorder[i]);
        postorderIdx -= 1;
        root.right = search(i + 1, end);
        root.left = search(start, i);
        break;
      }
    }

    return root;
  }

  return search(0, inorder.length);
};

module.exports = buildTree;
