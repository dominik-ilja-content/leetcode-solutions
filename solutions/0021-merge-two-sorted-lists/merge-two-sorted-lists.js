const { ListNode } = require("../../data_structures/LinkedList");

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

module.exports = mergeTwoLists;
