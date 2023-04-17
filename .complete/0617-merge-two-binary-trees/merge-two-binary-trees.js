const {
  TreeNode,
  createBinaryTree,
} = require("../../../data_structures/Trees");

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  function traverse(node1, node2, root) {
    if (!node1 && !node2) return root;
    if (node1 && !node2) {
      root = new TreeNode(node1.val);
      root.left = traverse(node1.left, node2, root.left);
      root.right = traverse(node1.right, node2, root.right);
    } else if (node2 && !node1) {
      root = new TreeNode(node2.val);
      root.left = traverse(node1, node2.left, root.left);
      root.right = traverse(node1, node2.right, root.right);
    } else {
      root = new TreeNode(node1.val + node2.val);
      root.left = traverse(node1.left, node2.left, root.left);
      root.right = traverse(node1.right, node2.right, root.right);
    }

    return root;
  }

  return traverse(root1, root2, null);
};

let tree1 = createBinaryTree([1]);
let tree2 = null;
let result = mergeTrees(tree1, tree2);
console.log(result);

module.exports = mergeTrees;
