const { ListNode } = require("../../data_structures/LinkedList");

/* Recursion */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (node === null || node.next === null) {
    return node;
  }
  const child = node.next;
  node.next = recur(node.next.next);
  child.next = node;

  return child;
};

/* Iteration */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (head === null || head.next === null) {
    return head;
  }

  const result = head.next;
  let parent = head;
  let child = parent.next;
  let temp = null;

  while (child !== null) {
    parent.next = child.next;
    child.next = parent;

    if (temp !== null) {
      temp.next = child;
    }

    temp = parent;
    parent = parent.next;
    child = parent === null ? null : parent.next;
  }

  return result;
};

module.exports = swapPairs;
