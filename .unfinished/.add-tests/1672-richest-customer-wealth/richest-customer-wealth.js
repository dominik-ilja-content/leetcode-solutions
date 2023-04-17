/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let max = null;

  for (let i = 0; i < accounts.length; i++) {
    let total = 0;

    for (let j = 0; j < accounts[i].length; j++) {
      total += accounts[i][j];
    }

    if (max === null || total > max) {
      max = total;
    }
  }

  return max;
};

console.log(
  maximumWealth([
    [2, 8, 7],
    [7, 1, 3],
    [1, 9, 5],
  ])
); // 17

module.exports = maximumWealth;
