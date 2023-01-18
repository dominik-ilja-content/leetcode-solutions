/*
    I have updated some variable names to make the functions more understandable
*/

/* Solution 1 - Linked List */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function createCircularList(nodes) {
  let head = null;
  let tail = null;

  for (let i = 0; i < nodes; i++) {
    const node = new ListNode(i + 1);
    if (head == null) {
      tail = head = node;
    } else {
      tail = tail.next = node;
    }
  }
  tail.next = head;

  return { head, tail };
}

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function (players, placesToCount) {
  if (placesToCount == 1) return players;

  let { head: currentNode, tail: previousNode } = createCircularList(players);

  while (currentNode !== previousNode) {
    for (let i = 1; i < placesToCount; i++) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    currentNode = previousNode.next = currentNode.next;
  }

  return currentNode.val;
};

/* Solution 2 - Math Recursive */

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function (n, k) {
  function helper(players, placesToCount) {
    if (players === 1) return 0;

    return (helper(players - 1, placesToCount) + placesToCount) % players;
  }

  return helper(n, k) + 1;
};

/* Solution 3 - Math Iterative */

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function (players, placesToCount) {
  let winningPosition = 0;

  for (let i = 2; i <= players; i++) {
    winningPosition = (winningPosition + placesToCount) % i;
  }

  return winningPosition + 1;
};

module.exports = findTheWinner;
