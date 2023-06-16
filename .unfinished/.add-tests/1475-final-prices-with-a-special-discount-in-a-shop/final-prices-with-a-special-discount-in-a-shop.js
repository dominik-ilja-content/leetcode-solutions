/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
  const output = [];

  for (let i = 0; i < prices.length; i++) {
    let inserted = false;
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] >= prices[j]) {
        output.push(prices[i] - prices[j]);
        inserted = true;
        break;
      }
    }

    if (!inserted) {
      output.push(prices[i]);
    }
  }

  return output;
};

module.exports = finalPrices;

/*
    so the discounted prices will be placed into an output array
    the price will be the difference between values at i & j
    when j is less than or equal to the price of i and the index
    of i is less than the index of j

    output[i] will be the difference of prices[i] - prices[j]
    when the index of is:

    - j > i
    - prices[j] <= prices[i]

    if no values meet this requirement insert prices[i] into the output
*/
