const { TreeNode } = require("../../../data_structures/Trees");

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
  const output = [];

  function dfs(node) {
    if (node === null) return;

    output.push(node.val);

    for (let i = 0; i < node.children.length; i++) {
      dfs(node.children[i]);
    }
  }
  dfs(root);

  return output;
};
