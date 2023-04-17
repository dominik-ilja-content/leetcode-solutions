const {
  ListNode,
  createSinglyLinkedList,
} = require("../../../data_structures/LinkedList");

function reverseTillNode(list, node) {
  let curr = list;
  let prev = null;

  while (curr !== node) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  if (k === 1) return head;

  let dummy = new ListNode(null);
  let prev = dummy;
  let reverseStart = head;
  let reverseEnd = head;
  let next = head.next;

  while (reverseEnd !== null) {
    for (let i = 0; i < k - 1 && reverseEnd !== null; i++) {
      reverseEnd = reverseEnd.next;
    }

    if (reverseEnd !== null) {
      next = reverseEnd.next;
      reverseTillNode(reverseStart, reverseEnd.next);

      reverseStart.next = next;
      prev.next = reverseEnd;
      prev = reverseStart;
      reverseStart = next;
      reverseEnd = next;
    }
  }

  return dummy.next || head;
};

console.log(reverseKGroup(createSinglyLinkedList([1, 2, 3, 4, 5, 6]), 2));

module.exports = reverseKGroup;
