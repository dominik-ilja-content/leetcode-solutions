const { LL, ListNode } = require("../LinkedList/LinkedList");

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
var sortList = function (head) {
  if (head == null || head.next == null) return head;

  function getMid(head) {
    // starting fast at head.next will give us a slow pointer
    // at left middle node. While 
    let slow = head, fast = head.next;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow;
  }

  function merge(list1, list2) {
    let dummy = new ListNode(), tail = dummy;

    while (list1 && list2) {
      if (list1.val < list2.val) {
        tail = tail.next = list1;
        list1 = list1.next;
      }
      else {
        tail = tail.next = list2;
        list2 = list2.next;
      }
    }

    if (list1) tail.next = list1;
    if (list2) tail.next = list2;

    return dummy.next;
  }

  // base case
  let mid = getMid(head),
    temp = mid.next;

  mid.next = null;

  let list1 = sortList(head);
  let list2 = sortList(temp);

  // building list up
  return merge(list1, list2);
};

console.log(sortList(LL([4, 3, 2, 1])));
