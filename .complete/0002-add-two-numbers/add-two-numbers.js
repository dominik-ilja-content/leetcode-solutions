const { ListNode } = require("../../data_structures/LinkedList");

/* Iterative */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let head = null;
  let tail = null;
  let carry = 0;

  while (l1 !== null || l2 !== null || carry !== 0) {
    const num1 = l1 !== null ? l1.val : 0;
    const num2 = l2 !== null ? l2.val : 0;
    let sum = num1 + num2 + carry;

    if (sum >= 10) {
      sum -= 10;
      carry = 1;
    } else {
      carry = 0;
    }

    const node = new ListNode(sum);

    if (head === null) {
      head = node;
      tail = node;
    } else {
      tail.next = node;
      tail = node;
    }

    if (l1 !== null) {
      l1 = l1.next;
    }
    if (l2 !== null) {
      l2 = l2.next;
    }
  }

  return head;
};

/* Recursive */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  function helper(l1, l2, count) {
    if (l1 === null && l2 === null && count === 0) {
      return null;
    }

    const num1 = l1 !== null ? l1.val : 0;
    const num2 = l2 !== null ? l2.val : 0;
    let sum = num1 + num2 + count;

    if (sum >= 10) {
      sum -= 10;
      count = 1;
    } else {
      count = 0;
    }

    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;

    return new ListNode(sum, helper(l1, l2, count));
  }
  return helper(l1, l2, 0);
};

module.exports = addTwoNumbers;
