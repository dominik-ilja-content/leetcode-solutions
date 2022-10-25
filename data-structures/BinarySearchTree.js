/**
 * @param {any} val
 * @param {TreeNode | undefined} left
 * @param {TreeNode | undefined} right
 * @returns {TreeNode} TreeNode Object containing val, left, and right props. left and right props
 *                     a either a Treenode or null.
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);

    if (this.root === null) {
      this.root = newNode;
      return this.root;
    }

    let currNode = this.root;

    while (true) {
      // left side insertion
      if (value < currNode.val) {
        // found open spot
        if (currNode.left == null) {
          currNode.left = newNode;
          break;
        }

        // move to node on the left to keep searching
        currNode = currNode.left;
      }
      // right side insertion
      else if (value > currNode.val) {
        // found open spot
        if (currNode.right == null) {
          currNode.right = newNode;
          break;
        }

        // move to node on the right to keep searching
        currNode = currNode.right;
      }
      // duplicate value. don't add it
      else {
        break;
      }
    }

    return this.root;
  }
}

/**
 * @param {Array} arr
 * @returns {TreeNode}
 * @desc Uses the BinarySearchTree class to insert nodes properly. Returns root node to be compatiable
 *       with Leetcode questions
 */

function createBinarySearchTree(arr) {
  const binarySearchTree = new BinarySearchTree();

  for (let val of arr) {
    binarySearchTree.insert(val);
  }

  return binarySearchTree.root;
}

module.exports = {
  TreeNode,
  createBinarySearchTree,
};
