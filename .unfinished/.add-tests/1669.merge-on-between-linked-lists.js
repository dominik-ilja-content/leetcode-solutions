const { LL, ListNode } = require('../LinkedList/LinkedList');

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function (list1, a, b, list2) {
  const start = a - 1, end = b + 1;
  let startNode, endNode, currNode = list1, l2 = list2, l2Tail, index = 0;

  // get start and end nodes
  while (currNode) {
    if (index === start) {
      startNode = currNode;
    }
    if (index === end) {
      endNode = currNode;
      break;
    }

    currNode = currNode.next;
    index += 1;
  }

  // get tail of list2
  currNode = list2;
  while (currNode) {
    if (currNode.next === null) l2Tail = currNode;

    currNode = currNode.next;
  }

  // combine the lists
  startNode.next = list2;
  l2Tail.next = endNode;

  return list1;
};

// console.log(LL, ListNode);
console.log(mergeInBetween(LL([0, 1, 2, 3, 4, 5]), 3, 4, LL([100, 101, 102])));
