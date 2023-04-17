const { createBinarySearchTree } = require("./classes/BinarySearchTree");

const tree = createBinarySearchTree([9, 4, 12, 3, 7, 10, 22]);

function traverse(node) {
  if (node === null) return;

  console.log(node.val);
  traverse(node.right);
  traverse(node.left);
}
traverse(tree);
