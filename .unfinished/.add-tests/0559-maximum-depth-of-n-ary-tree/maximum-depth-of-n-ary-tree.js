const { TreeNode } = require("../../../data_structures/Trees");

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (root === null) {
    return 0;
  }

  // if we enter the function we're guaranteed to have a depth of 1
  // which is why it's okay to return 1 + max in "dfs"
  function dfs(node) {
    let max = 0; // if no children default is 0

    for (let i = 0; i < node.children.length; i++) {
      let depth = dfs(node.children[i]);

      if (depth > max) {
        max = depth;
      }
    }

    return 1 + max;
  }
  return dfs(root);
};
