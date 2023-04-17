function ListNode(val) {
  this.val = val;
  this.next = null;
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
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  if (head === null) return head;

  let prevNode = null, currNode = head, nextNode = currNode.next;

  while (currNode !== null) {
    if (currNode.val === val) {
      if (currNode === head) {
        prevNode = currNode;
        head = currNode = nextNode;
      }
      else {
        currNode = prevNode.next = nextNode;
      }
    }
    else {
      prevNode = currNode;
      currNode = nextNode;
    }

    if (currNode !== null) nextNode = currNode.next;
  }

  return head;
};

console.log(JSON.stringify(removeElements(LL([1, 2, 6, 3, 4, 5, 6]), 6)));
console.log(JSON.stringify(removeElements(LL([1, 1, 2, 1, 2, 3, 3, 4, 4, 9, 8, 7, 6, 5, 4, 3]), 1)));
