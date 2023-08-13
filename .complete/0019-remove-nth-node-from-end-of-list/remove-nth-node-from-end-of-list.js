const {
  ListNode,
} = require("../../data_structures/LinkedList");

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  const dummy = new ListNode(null, head);
  let curr = head;
  let prev = dummy;
  let count = 0;

  while (curr) {
    curr = curr.next;
    count += 1;
  }

  curr = head;

  for (let i = 0; i < count - n; i++) {
    prev = curr;
    curr = curr.next;
  }

  prev.next = curr.next;

  return dummy.next;
};

module.exports = removeNthFromEnd;
