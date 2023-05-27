const { ListNode } = require("../../data_structures/LinkedList");

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (head === null || head.next === null) return null;

  const map = new Map();
  let current = head;

  while (current.next !== null && !map.get(current)) {
    map.set(current, true);
    current = current.next;
  }

  if (map.get(current)) {
    return current;
  }

  return null;
};

module.exports = detectCycle;
