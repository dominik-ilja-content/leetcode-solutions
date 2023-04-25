const { TreeNode, createBinaryTree } = require("../../data_structures/Trees");

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (root === null) return [];

  const output = [];
  const stack = [root];
  let nodesInLevel = 1;
  let maxNodesInLevel = 1;
  let level = 0;

  while (stack.length > 0) {
    const currentNode = stack.pop();
    output.push(currentNode.val);

    if (nodesInLevel === 0) {
      level += 1;
      maxNodesInLevel *= 2;
    }

    if (level % 2 === 0) {
      if (currentNode.right !== null) {
        stack.push(currentNode.right);
      }
      if (currentNode.left !== null) {
        stack.push(currentNode.left);
      }
    } else {
      if (currentNode.left !== null) {
        stack.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        stack.push(currentNode.right);
      }
    }
  }

  console.log(output);
  return output;
};

let tree = createBinaryTree([3, 9, 20, null, null, 15, 7]);
let result = zigzagLevelOrder(tree);
console.log(result);

module.exports = zigzagLevelOrder;
