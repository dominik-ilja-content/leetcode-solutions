function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
function LL(values) {
  let head = null, tail = null;

  for (let value of values) {
    const node = new ListNode(value);

    if (head === null)
      head = tail = node;
    else
      tail = tail.next = node;
  }

  return head;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  const map = new Map();

  while (head !== null) {
    if (map.has(head)) {
      return true;
    }

    map.set(head, true);
    head = head.next;
  }

  return false;
};

var hasCycle = function (head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) return true;
  }

  return false;
};

const cycle = new ListNode(2);
const ll = new ListNode(3, cycle);
cycle.next = new ListNode(0, new ListNode(-4, cycle));

console.log(hasCycle(ll));
