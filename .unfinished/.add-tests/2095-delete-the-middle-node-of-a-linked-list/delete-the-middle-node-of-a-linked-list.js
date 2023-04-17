const { printObj } = require("../0000-helpers/utils");
const {
  createSinglyLinkedList,
  ListNode,
} = require("../0000-helpers/LinkedList");

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function (head) {
  const dummy = new ListNode(null);
  dummy.next = head;

  let slow = head;
  let fast = head;
  let prev = dummy;

  while (fast !== null && fast.next !== null) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  prev.next = slow.next;

  return dummy.next;
};

printObj(deleteMiddle(createSinglyLinkedList([1, 3, 4, 7, 1, 2, 6])));
printObj(deleteMiddle(createSinglyLinkedList([1, 2, 3, 4])));
printObj(deleteMiddle(createSinglyLinkedList([2, 1])));
printObj(deleteMiddle(createSinglyLinkedList([2])));

module.exports = deleteMiddle;
