/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function reverseLL(ll) {
  let tail = new ListNode(ll.val), head = tail;
  ll = ll.next;

  while (ll !== null) {
    head = new ListNode(ll.val, head);
    ll = ll.next;
  }

  return head;
}
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let reverse = reverseLL(head);

  while (head !== null && reverse !== null) {
    if (head.val !== reverse.val) return false;

    head = head.next;
    reverse = reverse.next;
  }

  return true;
};
