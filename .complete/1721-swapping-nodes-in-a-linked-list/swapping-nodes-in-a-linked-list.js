const { ListNode } = require("../../data_structures/LinkedList");

/**
 * @param {ListNode} head
 * @return {number}
 */
function getLinkedListLength(head) {
  let length = 0;
  let curr = head;

  while (curr !== null) {
    length += 1;
    curr = curr.next;
  }
  return length;
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {
  const length = getLinkedListLength(head);
  const firstIdx = k;
  const lastIdx = length - (k - 1);
  let firstNode = null;
  let lastNode = null;
  let curr = head;
  let index = 1;

  while (curr !== null) {
    if (index === firstIdx) {
      firstNode = curr;
    }
    if (index === lastIdx) {
      lastNode = curr;
    }
    if (firstNode !== null && lastNode !== null) {
      const temp = firstNode.val;
      firstNode.val = lastNode.val;
      lastNode.val = temp;
      break;
    }
    curr = curr.next;
    index += 1;
  }

  return head;
};

module.exports = swapNodes;
