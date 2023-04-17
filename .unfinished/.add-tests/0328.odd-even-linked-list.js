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
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
  if (head === null || head.next === null) return head;

  let oddHead = null, oddTail = null,
    evenHead = null, evenTail = null,
    currNode = head, index = 1;

  while (currNode) {
    // even indexes
    if (index % 2 === 0) {
      if (evenHead === null)
        evenHead = evenTail = currNode;
      else
        evenTail = evenTail.next = currNode;
    }
    // odd indexes
    else {
      if (oddHead === null)
        oddHead = oddTail = currNode;
      else
        oddTail = oddTail.next = currNode;
    }

    currNode = currNode.next;
    index += 1;
  }

  // odd node at end of evenTail
  if (index % 2 === 0) evenTail.next = null;

  oddTail.next = evenHead;
  return oddHead;
};

console.log(oddEvenList(LL([10, 20, 30, 40, 50])));
console.log(oddEvenList(LL([1, 2, 3, 4, 5, 6, 7, 8]))); // bad output : [1,3,5,7,8]
