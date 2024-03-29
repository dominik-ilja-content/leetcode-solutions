/* 
Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.

Return the decimal value of the number in the linked list.

The most significant bit is at the head of the linked list.

 

Example 1:

Input: head = [1,0,1]
Output: 5
Explanation: (101) in base 2 = (5) in base 10

Example 2:

Input: head = [0]
Output: 0

 

Constraints:

    The Linked List is not empty.
    Number of nodes will not exceed 30.
    Each node's value is either 0 or 1.


*/

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
var getDecimalValue = function (head) {
  const values = [];

  // extract values from LinkedList
  let curr = head;
  while (curr !== null) {
    values.push(curr.val);
    curr = curr.next;
  }

  // add up values
  let count = 0;
  let multiplier = 1;
  let length = values.length - 1;

  for (let i = length; i >= 0; i--) {
    const digit = values[i];
    count += digit * multiplier;
    multiplier *= 2;
  }

  return count;
};
