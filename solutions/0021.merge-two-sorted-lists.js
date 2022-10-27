const {
  ListNode,
  createSinglyLinkedList,
} = require("../data-structures/LinkedList");

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let head = new ListNode(),
    currNode = head;

  while (list1 !== null && list2 !== null) {
    let val;

    if (list1.val < list2.val) {
      val = list1.val;
      list1 = list1.next;
    } else {
      val = list2.val;
      list2 = list2.next;
    }

    currNode = currNode.next = new ListNode(val);
  }

  if (list1 !== null) currNode.next = list1;
  if (list2 !== null) currNode.next = list2;

  return head.next;
};

// let list1 = createSinglyLinkedList([1, 2, 4]);
// let list2 = createSinglyLinkedList([1, 3, 4]);
// console.log(JSON.stringify(mergeTwoLists(list1, list2), null, "  "));
// {
//   "val": 1,
//   "next": {
//     "val": 1,
//     "next": {
//       "val": 2,
//       "next": {
//         "val": 3,
//         "next": {
//           "val": 4,
//           "next": {
//             "val": 4,
//             "next": null
//           }
//         }
//       }
//     }
//   }
// }

// list1 = createSinglyLinkedList([]);
// list2 = createSinglyLinkedList([]);
// console.log(mergeTwoLists(list1, list2)); // null

// list1 = createSinglyLinkedList([]);
// list2 = createSinglyLinkedList([0]);
// console.log(JSON.stringify(mergeTwoLists(list1, list2), null, "  "));
// {
//   "val": 0,
//   "next": null
// }
