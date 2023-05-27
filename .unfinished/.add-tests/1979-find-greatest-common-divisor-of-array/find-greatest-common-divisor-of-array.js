/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
  let min = Infinity;
  let max = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (num < min) min = num;
    if (num > max) max = num;
  }

  let greatestCommonDivisor = -Infinity;

  for (let i = 1; i <= min; i++) {
    const minIsDivisible = min % i === 0;
    const maxIsDivisible = max % i === 0;

    if (minIsDivisible && maxIsDivisible && i > greatestCommonDivisor) {
      greatestCommonDivisor = i;
    }
  }

  return greatestCommonDivisor;
};

/*

1.  find the smallest and largest numbers
2.  see which numbers divides them both
2.1 loop from 1 to the min number (inclusive)

*/

console.log(findGCD([2, 5, 6, 9, 10])); // 2
console.log(findGCD([7, 5, 6, 8, 3])); // 1
console.log(findGCD([3, 3])); // 3

module.exports = findGCD;
