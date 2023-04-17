/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const result = [];

  for (let i = 0; i <= n; i++) {
    result.push(i.toString(2).split("").reduce((sum, bit) => bit === "1" ? sum += 1 : sum, 0));
  }

  return result;
};

console.log(countBits(2));
console.log(countBits(5));
