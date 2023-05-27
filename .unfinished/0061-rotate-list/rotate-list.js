const { createSinglyLinkedList } = require("../../data_structures/LinkedList");

function listLength(head) {
  let current = head;
  let length = 0;

  while (current !== null) {
    current = current.next;
    length += 1;
  }

  return length;
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (k === 0 || head === null) return head;

  const length = listLength(head);
  const remainder = k % length;

  if (remainder === 0) return head;

  let rotations = length - remainder;
  let current = head;
  let prev = null;

  while (rotations > 0) {
    prev = current;
    current = current.next;
    rotations -= 1;
  }

  let last = current;

  while (last.next !== null) {
    last = last.next;
  }

  last.next = head;
  prev.next = null;

  return current;
};

const list = createSinglyLinkedList([1, 2, 3, 4, 5]);

console.log(rotateRight(list, 2));

module.exports = rotateRight;
