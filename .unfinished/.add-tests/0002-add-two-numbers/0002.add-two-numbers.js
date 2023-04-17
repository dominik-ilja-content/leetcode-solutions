const {
  ListNode,
  createSinglyLinkedList,
} = require("../0000-helpers/LinkedList");

/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.



Example 1:

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]

Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]



Constraints:

    The number of nodes in each linked list is in the range [1, 100].
    0 <= Node.val <= 9
    It is guaranteed that the list represents a number that does not have leading zeros.


*/

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let head = null;
  let tail = null;
  let carry = 0;

  while (l1 != null && l2 != null) {
    let sum = l1.val + l2.val + carry;

    if (sum >= 10) {
      sum -= 10;
      carry = 1;
    } else {
      carry = 0;
    }

    const currentNode = new ListNode(sum);

    if (head === null) {
      head = currentNode;
      tail = currentNode;
    } else {
      const oldTail = tail;
      tail = currentNode;
      oldTail.next = currentNode;
    }
    (l1 = l1.next), (l2 = l2.next);
  }

  if (l1 !== null || l2 !== null) {
    let list = l1 !== null ? l1 : l2;

    while (list !== null) {
      let sum = list.val + carry;

      if (sum >= 10) {
        sum -= 10;
        carry = 1;
      } else {
        carry = 0;
      }

      const currentNode = new ListNode(sum);
      const oldTail = tail;
      tail = currentNode;
      oldTail.next = currentNode;

      list = list.next;
    }
  }

  if (carry !== 0) {
    const oldTail = tail;
    const currentNode = new ListNode(carry);
    tail = currentNode;
    oldTail.next = currentNode;
  }

  return head;
};

module.exports = addTwoNumbers;
