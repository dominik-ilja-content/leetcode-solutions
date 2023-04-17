const { ListNode } = require("../../data_structures/LinkedList");

/**
 * @param {ListNode} head
 * @return {Listnode}
 */
function reverseList(head) {
  let curr = head;
  let prev = null;
  let next = null;

  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}

/**
 * @param {ListNode} head
 * @return {Listnode}
 */
var removeNodes = function (head) {
  let reversedHead = reverseList(head);
  let curr = reversedHead;
  let prev = null;
  let largestNumber = -Infinity;

  while (curr) {
    if (curr.val >= largestNumber) {
      largestNumber = curr.val;
      prev = curr;
    } else {
      prev.next = curr.next;
    }

    curr = curr.next;
  }

  return reverseList(reversedHead);
};

module.exports = removeNodes;
