const {
  TreeNode,
  createBinaryTree,
} = require("../../../data_structures/Trees");

/* Recursive */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  function traverse(node, values) {
    if (node === null) return values;

    traverse(node.left, values);
    traverse(node.right, values);
    values.push(node.val);

    return values;
  }
  return traverse(root, []);
};

/* Iterative */

/*
    Single Stack
    ---

*/
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  if (root === null) return [];

  let pre = null; // previous?
  const stack = [];
  const values = [];

  while (root !== null || stack.length > 0) {
    if (root !== null) {
      stack.push(root);
      root = root.left;
    } else {
      root = stack[stack.length - 1];

      if (root.right === null || root.right === pre) {
        values.push(root.val);
        stack.pop();
        pre = root;
        root = null;
      } else {
        root = root.right;
      }
    }
  }

  return values;
};

/*
    Stack & Map
    ---

*/
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  if (root === null) return [];

  const stack = [root];
  const values = [];
  const visitedNodes = new Map();

  while (stack.length > 0) {
    const node = stack[stack.length - 1];

    if (node.left !== null && !visitedNodes.has(node.left)) {
      stack.push(node.left);
    } else if (node.right !== null && !visitedNodes.has(node.right)) {
      stack.push(node.right);
    } else {
      visitedNodes.set(node, true);
      values.push(node.val);
      stack.pop();
    }
  }

  return values;
};

/*
    Morris Traversal
    ---

*/

/**
 * @param {TreeNode} from
 * @param {TreeNode} to
 */
function reverse(from, to) {
  if (from === to) return;

  let prev = from;
  let node = from.right;

  while (prev !== to) {
    const next = node.right;
    node.right = prev;
    prev = node;
    node = next;
  }
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  if (root === null) return [];

  const values = [];
  const dummy = new TreeNode(-1);
  let pre = null;

  dummy.left = root;
  root = dummy;

  while (root !== null) {
    if (root.left !== null) {
      pre = root.left;

      while (pre.right !== null && pre.right != root) {
        pre = pre.right;
      }

      if (pre.right === null) {
        pre.right = root;
        root = root.left;
      } else {
        let node = pre;
        reverse(root.left, pre);

        while (node !== root.left) {
          values.push(node.val);
          node = node.right;
        }

        values.push(node.val);
        reverse(pre, root.left);
        pre.right = null;
        root = root.right;
      }
    } else {
      root = root.right;
    }
  }

  return values;
};

let tree = createBinaryTree([1, 2, 3]);
let expected = [2, 3, 1];
let result = postorderTraversal(tree);
console.log(result);

module.exports = postorderTraversal;
