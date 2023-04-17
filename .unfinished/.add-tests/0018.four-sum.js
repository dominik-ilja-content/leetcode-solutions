/* 
Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

    0 <= a, b, c, d < n
    a, b, c, and d are distinct.
    nums[a] + nums[b] + nums[c] + nums[d] == target

You may return the answer in any order.

 

Example 1:

Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

Example 2:

Input: nums = [2,2,2,2,2], target = 8
Output: [[2,2,2,2]]

 

Constraints:

    1 <= nums.length <= 200
    -109 <= nums[i] <= 109
    -109 <= target <= 109


*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  const res = [], quad = [];

  function elSum(elsToSum, start, target) {
    if (elsToSum !== 2) {
      for (let i = start; i <= nums.length - elsToSum; i++) {
        // if i isn't at its beginning position and the prev value 
        // of i is the same as the current, skip the iteration
        if (i > start && nums[i] === nums[i - 1]) continue;

        quad.push(nums[i]);
        elSum(elsToSum - 1, i + 1, target - nums[i]);
        quad.pop();
      }
      return;
    }

    // base case
    let l = start, r = nums.length - 1;

    while (l < r) {
      let sum = nums[l] + nums[r];

      if (sum < target) {
        l += 1;
      }
      else if (sum > target) {
        r -= 1;
      }
      else {
        res.push(quad.concat(nums[l], nums[r]));
        l += 1;

        while (l < r && nums[l] === nums[l - 1]) {
          l += 1;
        }
      }
    }
  }

  elSum(4, 0, target);
  return res;
};

console.log(fourSum([-2, -1, 0, 0, 1, 2], 0));
console.log(fourSum([2, 2, 2, 2, 2], 8));

/* 



  i   l  m        r
[-2, -1, 0, 0, 1, 2]
  i   l     m     r
[-2, -1, 0, 0, 1, 2]
  i   l        m  r
[-2, -1, 0, 0, 1, 2] (-2,-1,1,2)

  i   l        m  r
[-2, -1, 0, 0, 1, 2]
  i      l     m  r
[-2, -1, 0, 0, 1, 2] 1
  i      l  m     r
[-2, -1, 0, 0, 1, 2] (-2,0,0,2)
  i         lm    r
[-2, -1, 0, 0, 1, 2]

      i  l  m     r
[-2, -1, 0, 0, 1, 2]
      i  l  m  r
[-2, -1, 0, 0, 1, 2] (-1,0,0,1)

         i  l  m  r
[-2, -1, 0, 0, 1, 2]




  i  l         m  r
[-2, -1, 0, 0, 1, 2]

  i      l  m     r
[-2, -1, 0, 0, 1, 2]

      i  l  m  r
[-2, -1, 0, 0, 1, 2]


*/
