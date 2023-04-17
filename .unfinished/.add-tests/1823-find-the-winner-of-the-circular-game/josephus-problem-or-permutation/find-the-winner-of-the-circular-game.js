const { printObj, JsonOBj } = require("../../0000-helpers/utils");

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function (n, k) {
  let answer = 0;
  for (let i = 2; i <= n; i++) {
    answer = (answer + k) % i;
  }
  return answer + 1;
};

printObj(findTheWinner(5, 1)); // 5
printObj(findTheWinner(5, 2)); // 3
printObj(findTheWinner(5, 3)); // 4
printObj(findTheWinner(5, 4)); // 5
printObj(findTheWinner(5, 5)); // 2
