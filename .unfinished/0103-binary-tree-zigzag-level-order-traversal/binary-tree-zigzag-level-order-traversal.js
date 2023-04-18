const { TreeNode } = require("../../data_structures/Trees");

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (root === null) return [];

  const output = [];
  const stack = [root];
  let nodesInLevel = 1;
  let level = 0;

  while (stack.length > 0) {
    const currentNode = stack.pop();
    output.push(currentNode.val);

    if (currentNode.right !== null) {
      stack.push(currentNode.right);
    }
    if (currentNode.left !== null) {
      stack.push(currentNode.left);
    }
  }
  console.log(output);
  return output;
};

module.exports = zigzagLevelOrder;
