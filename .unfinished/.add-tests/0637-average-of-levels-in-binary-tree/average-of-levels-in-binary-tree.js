const { TreeNode } = require("../../../data_structures/Trees");

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  const levelSums = [];
  const levelItems = [];

  function dfs(node, level) {
    if (levelSums[level] === undefined) {
      levelSums[level] = node.val;
      levelItems[level] = 1;
    } else {
      levelSums[level] += node.val;
      levelItems[level] += 1;
    }

    if (node.left !== null) {
      dfs(node.left, level + 1);
    }
    if (node.right !== null) {
      dfs(node.right, level + 1);
    }
  }
  dfs(root, 0);

  for (let i = 0; i < levelSums.length; i++) {
    levelSums[i] /= levelItems[i];
  }

  return levelSums;
};

module.exports = averageOfLevels;
