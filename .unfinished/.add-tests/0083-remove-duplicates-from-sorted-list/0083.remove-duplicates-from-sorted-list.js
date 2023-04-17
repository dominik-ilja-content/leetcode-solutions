const { printObj } = require("../0000-helpers/utils");
const {
  ListNode,
  createSinglyLinkedList,
} = require("../0000-helpers/LinkedList");

/*
Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.



Example 1:

Input: head = [1,1,2]
Output: [1,2]

Example 2:

Input: head = [1,1,2,3,3]
Output: [1,2,3]



Constraints:

    The number of nodes in the list is in the range [0, 300].
    -100 <= Node.val <= 100
    The list is guaranteed to be sorted in ascending order.

*/

/*
    !SOLUTION 1
*/

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  const map = {};
  let current = head;
  let prev = current;

  while (current !== null) {
    if (map[current.val] === undefined) {
      map[current.val] = true;
      prev = current;
      current = current.next;
    } else {
      prev.next = current.next;
      current = current.next;
    }
  }

  return head;
};

/*
    !SOLUTION 2
*/

var deleteDuplicates = function (head) {
  if (head == null || head.next == null) return head;

  let currNode = head;
  let nextNode = head.next;

  while (nextNode !== null) {
    if (currNode.val === nextNode.val) {
      currNode.next = nextNode = nextNode.next;
    } else {
      currNode = nextNode;
      nextNode = nextNode.next;
    }
  }

  return head;
};

printObj(deleteDuplicates(createSinglyLinkedList([1, 1, 2, 3, 3])));
printObj(deleteDuplicates(createSinglyLinkedList([1, 1, 1])));
