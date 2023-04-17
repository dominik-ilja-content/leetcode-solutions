const { TreeNode } = require("../../../data_structures/Trees");

/* Recursive */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  function traverse(node, values) {
    if (node === null) return values;

    values.push(node.val);
    traverse(node.left, values);
    traverse(node.right, values);

    return values;
  }
  return traverse(root, []);
};

/* Iterative Solutions */

/*
    This solution makes use of a map to keep track of nodes we've already visited.
    However, this isn't required in this problem. Because we can simply add the left
    and right nodes to the stack right away. This solution is more useful for doing a
    postorder traversal iteratively.
*/
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  if (root === null) return [];

  const stack = [root];
  const values = [];
  const visitedNodes = new Map();

  while (stack.length > 0) {
    const currNode = stack[stack.length - 1]; // node at top of stack
    const { left, right } = currNode;

    // "visit" the node
    if (!visitedNodes.has(currNode)) {
      values.push(currNode.val);
      visitedNodes.set(currNode, true);
    }

    // traverse to next valid node
    if (left !== null && !visitedNodes.has(left)) {
      stack.push(left);
    } else if (right !== null && !visitedNodes.has(right)) {
      stack.push(right);
    }
    // move back to previous node
    else {
      stack.pop();
    }
  }

  return values;
};

/*
    Preferred Iterative Solution
    ---
    The key to this is the order that you add the child nodes.
    The right node must be added before the left node.
    This way we continue moving down the left side of the tree.
*/
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  if (root === null) return [];

  const stack = [root];
  const values = [];

  while (stack.length > 0) {
    const curr = stack.pop();
    values.push(curr.val);
    if (curr.right !== null) stack.push(curr.right);
    if (curr.left !== null) stack.push(curr.left);
  }

  return values;
};

module.exports = preorderTraversal;
