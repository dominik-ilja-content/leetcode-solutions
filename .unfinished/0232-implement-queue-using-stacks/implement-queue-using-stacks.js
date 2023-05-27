var MyQueue = function () {
  this.stack1 = [];
  this.stack2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  function addItem(itemStack, emptyStack) {
    while (itemStack.length > 0) {
      emptyStack.push(itemStack.pop());
    }
  }

  if (this.stack1.length > 0) {
    addItem(this.stack1, this.stack2);
    this.stack2.push(x);
    addItem(this.stack2, this.stack1);
  } else {
    addItem(this.stack2, this.stack1);
    this.stack1.push(x);
    addItem(this.stack1, this.stack2);
  }
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.stack1.length > 0) {
    return this.stack1.pop();
  }

  return this.stack2.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (this.stack1.length > 0) {
    return this.stack1[this.stack1.length - 1];
  }

  return this.stack2[this.stack2.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.stack1.length === 0 && this.stack2.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

var obj = new MyQueue();
obj.push(1);
obj.push(2);
obj.push(3);
console.log(obj.peek());
console.log(obj.pop());
console.log(obj.empty());

module.exports = MyQueue;
