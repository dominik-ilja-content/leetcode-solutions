const { TreeNode } = require("../../../data_structures/Trees");

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  function dfs(node, arr) {
    if (node.left === null && node.right === null) {
      arr.push(node.val);
      return arr;
    }
    if (node.left !== null) {
      dfs(node.left, arr);
    }
    if (node.right !== null) {
      dfs(node.right, arr);
    }

    return arr;
  }

  const leafNodes1 = dfs(root1, []);
  const leafNodes2 = dfs(root2, []);

  console.log({ leafNodes1, leafNodes2 });

  if (leafNodes1.length !== leafNodes2.length) {
    return false;
  }

  for (let i = 0; i < leafNodes1.length; i++) {
    if (leafNodes1[i] !== leafNodes2[i]) {
      return false;
    }
  }

  return true;
};

module.exports = leafSimilar;
