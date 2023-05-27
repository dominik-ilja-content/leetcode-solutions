/**
 * @param {number} n
 */
var OrderedStream = function (n) {
  this.values = Array(n).fill(null);
  this.pointer = 0;
};

/**
 * @param {number} idKey
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function (idKey, value) {
  this.values[idKey - 1] = value;
  const output = [];

  while (this.pointer < this.values.length) {
    const data = this.values[this.pointer];
    if (data === null) break;
    output.push(this.values[this.pointer]);
    this.pointer += 1;
  }

  return output;
};

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */

module.exports = OrderedStream;
