const { printObj } = require("../0000-helpers/utils");
const { TreeNode } = require("../0000-helpers/Trees");

/**
 * @param {number} n
 * @return {TreeNode[]}
 */
// var allPossibleFBT = function (n) {
//   if ((n - 1) % 2 !== 0) return [];
//   if (n === 1) return [new TreeNode()];

//   const output = [];
//   const root = new TreeNode();
//   let count = n - 1; // remove 1 for root node

//   function buildTree(node) {
//     count -= 2;
//     node.left = new TreeNode();
//     node.right = new TreeNode();

//     // we've run out of nodes
//     if (count === 0) {
//       // copy tree and add it to output
//       // output.push(new TreeNode(0, root.left, root.right));
//       output.push(JSON.parse(JSON.stringify(root)));
//       // remove set nodes
//       node.left = node.right = null;
//       // add 2 to count because we removed 2 nodes
//       count += 2;
//       // we can't check any further so leave call
//       return;
//     }

//     buildTree(node.left);
//     buildTree(node.right);
//   }

//   buildTree(root);
//   return output;
// };

var allPossibleFBT = function (n) {
  if ((n - 1) % 2 !== 0) return [];
  if (n === 1) return [new TreeNode()];

  const output = [];
  const root = new TreeNode();
  let count = n - 1; // remove 1 for root node

  function buildTree(node) {
    count -= 2;
    node.left = new TreeNode();
    node.right = new TreeNode();

    // we've run out of nodes
    if (count === 0) {
      // copy tree and add it to output
      // output.push(new TreeNode(0, root.left, root.right));
      output.push(JSON.parse(JSON.stringify(root)));
      // remove set nodes
      node.left = node.right = null;
      // add 2 to count because we removed 2 nodes
      count += 2;
      // we can't check any further so leave call
      return;
    }

    buildTree(node.left);
    buildTree(node.right);
  }

  buildTree(root);
  return output;
};

printObj(allPossibleFBT(7));

module.exports = allPossibleFBT;
