/**
 * @param {any} val
 * @param {undefined | ListNode} next
 * @returns {ListNode} ListNode object containing a val property and next property
 * @desc ListNode based off of Leetcode definition
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {Array} values
 * @returns {ListNode}
 * @desc Builds a Singly Linked List from an Array
 */
function createSinglyLinkedList(values) {
  let head = null;
  let tail = null;

  for (let value of values) {
    const node = new ListNode(value);
    head === null ? (head = tail = node) : (tail = tail.next = node);
  }

  return head;
}

module.exports = {
  ListNode,
  createSinglyLinkedList,
};
