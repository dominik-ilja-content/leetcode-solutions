/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

/*
    We will change the numbers at the end of nums 1. We will start by comparing the largest values
    and replace the zeros with the values from each array.

    [1,2,3,0,0,0] & [2,5,6]
         ^     ^         ^
    3 > 6? No => [1,2,3,0,0,6]


    [1,2,3,0,0,6] & [2,5,6]
         ^   ^         ^
    3 > 5? No => [1,2,3,0,5,6]

    [1,2,3,0,5,6] & [2,5,6]
         ^ ^         ^
    3 > 2? Yes => [1,2,0,3,5,6]

    [1,2,3,0,0,0] & [2,5,6]
       ^             ^
    2 > 2? No => [1,2,2,3,5,6]


    [1,2,2,3,5,6] & [2,5,6]
       ^            ^
    Outside bounds of nums2 break
*/

var merge = function (nums1, m, nums2, n) {
  if (n === 0) return nums1;

  let idx1 = m - 1,
    idx2 = n - 1;

  for (let i = nums1.length - 1; i >= 0; i--) {
    const temp = nums1[i];

    if (nums1[idx1] > nums2[idx2]) {
      nums1[i] = nums1[idx1];
      nums1[idx1] = temp;
      idx1 -= 1;
    } else {
      nums1[i] = nums2[idx2];
      idx2 -= 1;
    }

    // we've inserted all the values from nums2
    if (idx2 < 0) break;
  }
};

let nums1 = [1, 2, 3, 0, 0, 0];
merge(nums1, 3, [2, 5, 6], 3);
console.log(nums1); // [1, 2, 2, 3, 5, 6]

nums1 = [1];
merge(nums1, 0, [1], 1);
console.log(nums1); // [1]

nums1 = [0];
merge(nums1, 0, [1], 1);
console.log(nums1); // [1]
