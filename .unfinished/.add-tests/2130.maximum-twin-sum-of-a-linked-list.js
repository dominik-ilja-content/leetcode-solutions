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
 * @return {number}
 */
/* var pairSum = function (head) {
  const nums = [];

  while (head !== null) {
    nums.push(head.val);
    head = head.next;
  }

  let l = 0, r = nums.length - 1, max = -Infinity;

  while (l < r) {
    max = Math.max(nums[l] + nums[r], max);
    l += 1, r -= 1;
  }

  return max;
}; */


/* 

1. slow will be at the middle of the list when the while loop breaks
2. reverse the first half of the linked list and make the old head's next point to slow
3. reset head to point to the new head and step through with both pointers
4. add up their values and test against previous max
5. return max

*/
var pairSum = function (head) {
  let slow = head, fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let prevNode = slow, currNode = head, nextNode;

  while (currNode !== slow) {
    nextNode = currNode.next; // 4 -> 2 -> 1  | // 2 -> 1
    currNode.next = prevNode; // 5 -> 2 -> 1  | // 4 -> 5 -> 2 -> 1
    prevNode = currNode; // 5                 | // 4
    currNode = nextNode; // 4                 | // 2
  }

  let max = -Infinity; head = prevNode;

  while (slow) {
    max = Math.max(head.val + slow.val, max);
    slow = slow.next, head = head.next;
  }

  return max;
};

console.log(pairSum(LL([5, 4, 2, 1]))); // [4, 5, 2, 1]
console.log(pairSum(LL([4, 2, 2, 3])));
console.log(pairSum(LL([1, 100000])));
