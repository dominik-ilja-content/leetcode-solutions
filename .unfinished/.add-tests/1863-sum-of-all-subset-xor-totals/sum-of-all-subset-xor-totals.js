/*

The XOR total of an array is defined as the bitwise XOR of all its elements, or 0 if the array is empty.

	For example, the XOR total of the array [2,5,6] is 2 XOR 5 XOR 6 = 1.

Given an array nums, return the sum of all XOR totals for every subset of nums.

Note: Subsets with the same elements should be counted multiple times.

An array a is a subset of an array b if a can be obtained from b by deleting some (possibly zero) elements of b.


# example
Input: nums = [5,1,6]
Output: 28
Explanation: The 8 subsets of [5,1,6] are:
- The empty subset has an XOR total of 0.
- [5] has an XOR total of 5.
- [1] has an XOR total of 1.
- [6] has an XOR total of 6.
- [5,1] has an XOR total of 5 XOR 1 = 4.
- [5,6] has an XOR total of 5 XOR 6 = 3.
- [1,6] has an XOR total of 1 XOR 6 = 7.
- [5,1,6] has an XOR total of 5 XOR 1 XOR 6 = 2.
0 + 5 + 1 + 6 + 4 + 3 + 7 + 2 = 28

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
  const recurse = (idx, total) => {
    if (idx === nums.length) return total;

    const withEl = recurse(idx + 1, total ^ nums[idx]);
    const withoutEl = recurse(idx + 1, total);

    return withEl + withoutEl;
  };

  return recurse(0, 0);
};
// /**
//  * @param {number[]} nums
//  * @return {[]}
//  */
// var subsetXORSum = function (nums) {
// let totalCalls = 0;
//   const totals = [];

//   const recurse = (idx, total) => {
// totalCalls += 1;

//     if (idx === nums.length) return totals.push(total);

//     const withoutEl = recurse(idx + 1, [...total]);
//     const withEl = recurse(idx + 1, [...total, nums[idx]]);

//     // return withEl + withoutEl;
//   };
//   recurse(0, []);
//   return totals;
// };

console.log(subsetXORSum([5, 1, 6]));
console.log(subsetXORSum([3, 4, 5, 6, 7, 8]));
console.dir(subsetXORSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), { depth: null });

module.exports = subsetXORSum;

/*
  What we can do for this problem is to use recursion to get every single
  pair. We can do this in each resursive call adding or not adding the element.


*/
