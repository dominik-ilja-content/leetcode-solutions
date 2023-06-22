/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function (arr, size) {
  let output = [];

  let count = 0;
  let idx = 0;
  while (idx < arr.length) {
    let row = [];
    while (count < size && idx < arr.length) {
      row.push(arr[idx]);
      count += 1;
      idx += 1;
    }
    count = 0;
    output.push(row);
  }

  return output;
};

module.exports = chunk;
