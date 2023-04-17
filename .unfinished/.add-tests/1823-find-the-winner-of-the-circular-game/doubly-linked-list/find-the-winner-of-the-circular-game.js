const { printObj, JsonOBj } = require("../../0000-helpers/utils");

function ListNode(val, next, prev) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

function createCircularList(nodes) {
  let head = null;
  let tail = null;

  for (let i = 0; i < nodes; i++) {
    const node = new ListNode(i + 1);
    if (head === null) {
      tail = head = node;
    } else {
      tail.next = node;
      node.prev = tail;
      tail = node;
    }
  }
  tail.next = head;
  head.prev = tail;

  return head;
}

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function (n, k) {
  if (n === 1 || k === 1) return n;

  let curr = createCircularList(n);

  while (curr.next !== curr) {
    for (let i = 1; i < k; i++) {
      curr = curr.next;
    }

    curr.prev.next = curr.next;
    curr.next.prev = curr.prev;
  }
  return curr.val;
};

printObj(findTheWinner(5, 1));
printObj(findTheWinner(5, 2));
printObj(findTheWinner(5, 3));
printObj(findTheWinner(5, 4));
printObj(findTheWinner(5, 5));
