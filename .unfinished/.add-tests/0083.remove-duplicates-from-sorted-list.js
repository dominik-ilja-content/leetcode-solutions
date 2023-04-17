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
var deleteDuplicates = function (head) {
  const map = {};
  let current = head;
  let prev = current;

  while (current !== null) {
    if (map[current.val] === undefined) {
      map[current.val] = true;
      prev = current;
      current = current.next;
    }
    else {
      prev.next = current.next;
      current = current.next;
    }
  }

  return head;
};

// const list = {
//   val: 1,
//   next: {
//     val: 1,
//     next: {
//       val: 2,
//       next: {
//         val: 3,
//         next: {
//           val: 3,
//           next: null
//         }
//       }
//     }
//   }
// };
const list = {
  val: 1,
  next: {
    val: 1,
    next: {
      val: 1,
      next: null
    }
  }
};



// ==============================================================================================================================================================================================================================================================================================================================
// ==============================================================================================================================================================================================================================================================================================================================
// ==============================================================================================================================================================================================================================================================================================================================



var deleteDuplicates = function (head) {
  if (head == null || head.next == null) return head;

  let currNode = head, nextNode = head.next;

  while (nextNode !== null) {
    if (currNode.val === nextNode.val)
      currNode.next = nextNode = nextNode.next;
    else
      currNode = nextNode, nextNode = nextNode.next;
  }

  return head;
};



console.dir(deleteDuplicates(list));
