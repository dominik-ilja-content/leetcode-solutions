/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// 0, n, 1, n - 1, 2, n - 2, ...

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  if (head === null || head.next === null || head.next.next === null) {
    return;
  }

  // get middle of list node
  let middle = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    middle = middle.next;
    fast = fast.next.next;
  }

  // reverse list from middle to end
  let curr = middle;
  let prev = null; // reference to new head

  while (curr !== null) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  // merge the lists together
  let l1 = head;
  let l1Next = head.next;
  let l2 = prev;
  let l2Next = prev.next;

  while (l1 && l1Next && l2 && l2Next) {
    l1.next = l2;
    l1 = l1Next;
    l1Next = l1.next;
    l2.next = l1;
    l2 = l2Next;
    l2Next = l2.next;
  }
};

module.exports = reorderList;
