/*
    push(1)  [1]    []
    push(2)  [1, 2] []
    top()    2
    pop()    2
    empty()  false
*/

class Queuee {
  constructor() {
    this.items = [];
  }

  enqueue(x) {
    this.items.push(x);
  }
  dequeue() {
    return this.items.shift();
  }
  isEmpty() {
    return this.size === 0;
  }
  peek() {
    return this.items[0];
  }
  get size() {
    return this.items.length;
  }
}

var MyStack = function () {
  this.queue1 = new Queuee();
  this.queue2 = new Queuee();
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  if (this.queue1.isEmpty()) {
    this.queue1.enqueue(x);

    while (!this.queue2.isEmpty()) {
      this.queue1.enqueue(this.queue2.dequeue());
    }
  } else if (this.queue2.isEmpty()) {
    this.queue2.enqueue(x);

    while (!this.queue1.isEmpty()) {
      this.queue2.enqueue(this.queue1.dequeue());
    }
  }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  if (!this.queue1.isEmpty()) {
    return this.queue1.dequeue();
  } else {
    return this.queue2.dequeue();
  }
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  if (!this.queue1.isEmpty()) {
    return this.queue1.peek();
  } else {
    return this.queue2.peek();
  }
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.queue1.isEmpty() && this.queue2.isEmpty();
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
var obj = new MyStack();
obj.push(1);
obj.push(2);
var result1 = obj.top();
var result2 = obj.pop();
var result3 = obj.empty();

console.log({ obj, result1, result2, result3 });
