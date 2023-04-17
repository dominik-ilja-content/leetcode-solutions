const {
  ListNode,
  createSinglyLinkedList,
} = require("../0000-helpers/LinkedList");

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
// var mergeTwoLists = function (list1, list2) {
//   let list = new ListNode();
//   const head = list;

//   while (list1 !== null && list2 !== null) {
//     if (list1.val < list2.val) {
//       list.next = new ListNode(list1.val);
//       list1 = list1.next;
//     }
//     else {
//       list.next = new ListNode(list2.val);
//       list2 = list2.next;
//     }

//     list = list.next;
//   }

//   if (list1 === null) list.next = list2;
//   if (list2 === null) list.next = list1;

//   return head.next;
// };

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

/*
[1,2,4]
[1,3,4]
*/

const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

console.log(JSON.stringify(mergeTwoLists(list1, list2)));
