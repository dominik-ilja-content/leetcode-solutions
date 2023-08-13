const {
  ListNode,
} = require("../../data_structures/LinkedList");

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  function recur(node) {
    // base case: At the end of the list
    if (node === null || node.next === null) {
      return node;
    }

    /*
      1. Save the node's child because its reference will be overwritten.
      Without the reference we won't be able to swap.

      2. Overwrite the child with the result of the recursive call

      3. Complete the swap by having the child's next point to its original parent.

      4. Return child because it is now the parent node.
    */
    const child = node.next; // 1
    node.next = recur(node.next.next); // 2
    child.next = node; // 3

    return child; // 4
  }

  return recur(head);
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (head === null || head.next === null) return head;

  const result = head.next; // Will become the new head of the list after first swap
  let parent = head;
  let child = parent.next;
  let temp = null;

  while (child !== null) {
    /*
      Swaps the pointers of the parent and the child
    */
    parent.next = child.next;
    child.next = parent;

    /*
      After the first loop, swapping the parent and child pointers causes
      the child to not be a part of the main list anymore. We reconnect it
      by pointing the previous parent node (temp) to the current child node.
    */
    if (temp !== null) temp.next = child;

    /*
      Move the node indexes :
        1. Capture previous parent
        2. Move the parent and child to reference the next two nodes in the list
        3. Check that the parent isn't at the end of the list before moving index of child
    */
    temp = parent;
    parent = parent.next;
    child = parent === null ? null : parent.next;
  }

  return result;
};

module.exports = swapPairs;
