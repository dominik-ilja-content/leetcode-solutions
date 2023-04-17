/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let variations = 0;

  function climb(step) {
    if (step > n) return;
    if (step === n) {
      variations += 1;
      return;
    }

    climb(step + 1);
    climb(step + 2);
  }
  climb(0);

  return variations;
};

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let memoMap = {};

  function climb(step) {
    if (step > n) {
      return 0;
    }
    if (step === n) {
      return 1;
    }
    if (memoMap[step] === undefined) {
      memoMap[step] = climb(step + 1) + climb(step + 2);
    }

    return memoMap[step];
  }
  return climb(0);
};

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let one = 1;
  let two = 1;

  for (let i = 0; i < n - 1; i++) {
    const temp = one;
    one += two;
    two = temp;
  }

  return one;
};

console.log(climbStairs(5));

module.exports = climbStairs;
