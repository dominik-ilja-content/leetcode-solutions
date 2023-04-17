const { printObj, JsonOBj } = require("../../0000-helpers/utils");

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function createCircularList(nodes) {
  let head = null;
  let tail = null;

  for (let i = 0; i < nodes; i++) {
    const node = new ListNode(i + 1);
    if (head === null) {
      tail = head = node;
    } else {
      tail = tail.next = node;
    }
  }
  tail.next = head;

  return { head, tail };
}

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function (n, k) {
  if (k === 1) return n;

  let { head: curr, tail: prev } = createCircularList(n);

  while (curr !== prev) {
    for (let i = 1; i < k; i++) {
      prev = curr;
      curr = curr.next;
    }

    curr = prev.next = curr.next;
  }

  return curr.val;
};

printObj(findTheWinner(5, 1));
printObj(findTheWinner(5, 2));
printObj(findTheWinner(5, 3));
printObj(findTheWinner(5, 4));
printObj(findTheWinner(5, 5));
