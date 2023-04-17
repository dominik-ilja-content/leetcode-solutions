function ListNode(val) {
  this.val = val;
  this.next = null;
}
function LL(values) {
  let head = null, tail = null;

  for (let value of values) {
    const node = new ListNode(value);

    if (head === null)
      head = tail = node;
    else
      tail = tail.next = node;
  }

  return head;
}

function reverseLL(head) {
  let prevNode = null, currNode = head, nextNode;

  while (currNode !== null) {
    nextNode = currNode.next;

    currNode.next = prevNode;
    prevNode = currNode;
    currNode = nextNode;
  }

  return prevNode;
}

function getLengthOfLL(head) {
  let length = 0, headCopy = head;

  while (headCopy !== null) {
    headCopy = headCopy.next;
    length += 1;
  }

  return length;
}
function moveHead(head, steps) {
  let headCopy = head;

  for (let i = 0; i < steps; i++) {
    headCopy = headCopy.next;
  }

  return headCopy;
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let lenOfListA = getLengthOfLL(headA),
    lenOfListB = getLengthOfLL(headB),
    listA = headA,
    listB = headB;

  if (lenOfListA > lenOfListB) {
    listA = moveHead(listA, lenOfListA - lenOfListB);
  }
  else if (lenOfListB > lenOfListA) {
    listB = moveHead(listB, lenOfListB - lenOfListA);
  }

  while (listA !== null && listB !== null) {
    if (listA === listB) return listA;

    listA = listA.next;
    listB = listB.next;
  }

  return null;
};

// neetcode solution
var getIntersectionNode = function (headA, headB) {
  let l1 = headA, l2 = headB;

  while (l1 !== l2) {
    l1 = l1 !== null ? l1.next : headB;
    l2 = l2 !== null ? l2.next : headA;
  }

  return l1;
};

console.log(JSON.stringify(reverseLL(LL([1, 2, 3, 4, 5]))));

getIntersectionNode();
