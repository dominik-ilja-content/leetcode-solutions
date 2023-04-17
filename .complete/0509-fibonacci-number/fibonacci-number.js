/* Recursion */
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n <= 1) return n;

  return fib(n - 1) + fib(n - 2);
};

/* Memoization */
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n, memo = {}) {
  if (n <= 1) return n;

  if (memo[n] === undefined) {
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  }

  return memo[n];
};

module.exports = fib;
