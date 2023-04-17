/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));

function turnArrayToLinkedList(arr) {
  const head = new ListNode(arr[0]);

  for (let i = 1, node = head; i < arr.length; i++) {
    node.next = new ListNode(arr[i]);
    node = node.next;
  }

  return head;
}

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {

  const values = [];
  let index = 1, node = head, pointer = right - 1;

  while (node !== null) {

    if (index >= left && index <= right) {
      values[pointer] = node.val;
      pointer -= 1;
    }
    else {
      values.push(node.val);
    }
    node = node.next;
    index += 1;
  }

  return turnArrayToLinkedList(values);
};

console.log(reverseBetween(head, 2, 4));
