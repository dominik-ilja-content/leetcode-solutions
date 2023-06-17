class Node {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
class Queuee {
  constructor() {
    this._size = 0;
    this._head = null;
    this._tail = null;
  }

  add(val) {
    const node = new Node(val);

    if (this._size === 0) {
      this._head = this._tail = node;
    } else {
      this._tail = this._tail.next = node;
    }

    this._size += 1;
  }
  remove() {
    if (this._size === 0) return null;

    const head = this._head;
    this._head = this._head.next;
    this._size -= 1;

    return head.val;
  }
  peek() {
    return this._head.val;
  }
  get size() {
    return this._size;
  }
}

/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
  const sandwichStack = [];
  const preferenceQueue = new Queuee();

  for (let i = sandwiches.length - 1, j = 0; i >= 0; i--, j++) {
    sandwichStack.push(sandwiches[i]);
    preferenceQueue.add(students[j]);
  }

  // if we make a full pass through the length of the sandwich stack and don't
  // make any updates we need to break;
  while (sandwichStack.length > 0) {
    const sandwich = sandwichStack.pop();
    let sandwichTaken = false;
    let idx = 0;

    while (!sandwichTaken && idx < preferenceQueue.size) {
      const preference = preferenceQueue.remove();

      if (sandwich === preference) {
        sandwichTaken = true;
      } else {
        preferenceQueue.add(preference);
      }

      idx += 1;
    }

    if (!sandwichTaken) {
      break;
    }
  }

  return preferenceQueue.size;
};

module.exports = countStudents;
