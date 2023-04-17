const {
  createSinglyLinkedList,
  ListNode,
} = require("../data_structures/LinkedList");
const { printObj } = require("../data_structures/Helpers");

/*
  First solution can be to
    - 1. get the length of the list
    - 2. traverse the list "length - n" to get node
    - 3. update pointers
    - 4. return head
*/

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

  // 1. get the length of the list
  while (curr) {
    curr = curr.next;
    count += 1;
  }

  curr = head;

  // 2. traverse the list "length - n" to get node
  for (let i = 0; i < count - n; i++) {
    prev = curr;
    curr = curr.next;
  }

  // 3. update pointers
  prev.next = curr.next;

  // 4. return head
  return dummy.next;
};

printObj(removeNthFromEnd(createSinglyLinkedList([1, 2, 3, 4, 5]), 2)); // [1,2,3,5]
printObj(removeNthFromEnd(createSinglyLinkedList([1]), 1)); // [] or null
printObj(removeNthFromEnd(createSinglyLinkedList([1, 2]), 1)); // [1]
printObj(removeNthFromEnd(createSinglyLinkedList([1, 2]), 2)); // [2]

module.exports = removeNthFromEnd;
