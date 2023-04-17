const { TreeNode } = require("../../data_structures/Trees");

/**
 * @param {TreeNode} root
 * @return {number}
 */
var averageOfSubtree = function (root) {
  let matches = 0;

  function traverse(node) {
    const results = { elements: 1, total: node.val };

    if (node.left === null && node.right === null) {
      matches += 1;
      return results;
    }
    if (node.left !== null) {
      const { elements, total } = traverse(node.left);
      results.elements += elements;
      results.total += total;
    }
    if (node.right !== null) {
      const { elements, total } = traverse(node.right);
      results.elements += elements;
      results.total += total;
    }

    const average = Math.floor(results.total / results.elements);

    if (average === node.val) {
      matches += 1;
    }

    return results;
  }
  traverse(root);

  return matches;
};

module.exports = averageOfSubtree;
