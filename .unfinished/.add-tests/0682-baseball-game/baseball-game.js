/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
  let records = [];

  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === "+") {
      let len = records.length;
      let sum = records[len - 2] + records[len - 1];
      records.push(sum);
    } else if (operations[i] === "C") {
      records.pop();
    } else if (operations[i] === "D") {
      records.push(records[records.length - 1] * 2);
    } else {
      records.push(parseInt(operations[i]));
    }
  }

  let output = 0;

  for (let i = 0; i < records.length; i++) {
    output += records[i];
  }

  return output;
};

module.exports = calPoints;
