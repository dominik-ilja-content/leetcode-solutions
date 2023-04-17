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

/* 
  We will have at least 3 values in out list
  1. The first will be a zero so we can skip it with `head = head.next`
  2. Track the total of our values and push it into result once we hit a zero. reset total
  3. continue until head is null
  4. return result
*/
var mergeNodes = function (head) {
  let dummy = new ListNode(), dummyTail = dummy, total = 0;
  head = head.next;

  while (head) {

    if (head.val === 0) {
      dummyTail = dummyTail.next = new ListNode(total);
      total = 0;
    }
    else {
      total += head.val;
    }

    head = head.next;
  }

  return dummy.next;
};

// leetcode solution
// Two pointers (Equie Directional)
var mergeNodes = function (head) {
  let modifierPointer = head;
  let traversPointer = head.next;
  let sum = 0;

  while (traversPointer) {
    sum += traversPointer.val;

    if (traversPointer.val === 0) {
      modifierPointer.val = sum;
      modifierPointer.next = traversPointer.next;
      modifierPointer = modifierPointer.next;
      sum = 0;
    }

    traversPointer = traversPointer.next;
  }
  return head;
};

console.log(mergeNodes(LL([0, 3, 1, 0, 4, 5, 2, 0])));
console.log(mergeNodes(LL([0, 1, 0, 3, 0, 2, 2, 0])));
