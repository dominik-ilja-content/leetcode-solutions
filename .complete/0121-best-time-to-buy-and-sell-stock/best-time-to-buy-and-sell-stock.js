/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      const difference = prices[j] - prices[i];
      if (difference > profit) {
        profit = difference;
      }
    }
  }

  return profit;
};

var maxProfit = function (prices) {
  let profit = 0;
  let left = 0;
  let right = left + 1;

  while (right < prices.length) {
    const difference = prices[right] - prices[left];

    if (difference > profit) {
      profit = difference;
    }
    if (difference < 0) {
      left = right;
    }

    right += 1;
  }

  return profit;
};

module.exports = maxProfit;
