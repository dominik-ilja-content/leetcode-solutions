const {
  ListNode,
  createSinglyLinkedList,
} = require("../../../data_structures/LinkedList");

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  let head = null;
  let tail = null;
  let smallestNode = null;
  let nullLists = 0;

  while (nullLists !== lists.length) {
    let winningIndex = null;
    nullLists = 0;
    smallestNode = null;

    for (let i = 0; i < lists.length; i++) {
      const list = lists[i];

      if (list === null) {
        nullLists += 1;
        continue;
      }

      if (smallestNode === null) {
        smallestNode = new ListNode(list.val);
        winningIndex = i;
      } else if (list.val < smallestNode.val) {
        smallestNode.val = list.val;
        winningIndex = i;
      }
    }

    if (head === null) {
      head = tail = smallestNode;
    } else {
      tail = tail.next = smallestNode;
    }

    if (winningIndex !== null) {
      lists[winningIndex] = lists[winningIndex].next;
    }
  }

  return head;
};

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function mergeLists(list1, list2) {
  let dummyNode = new ListNode(null);
  let tail = dummyNode;

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }

    tail = tail.next;
  }

  if (list1 !== null) tail.next = list1;
  if (list2 !== null) tail.next = list2;

  return dummyNode.next;
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (lists.length === 0) return null;

  while (lists.length > 1) {
    let list1 = lists.pop();
    let list2 = lists.pop();
    let mergedList = mergeLists(list1, list2);
    lists.push(mergedList);
  }

  return lists[0];
};

module.exports = mergeKLists;
