/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// nums =  [4, 5, 6, 7, 8, 1, 2, 3], target = 8
var search = function (nums, target) {
  let l = 0, r = nums.length - 1;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2),
      numL = nums[l], numR = nums[r], numM = nums[mid];

    if (nums[mid] === target) return mid;

    // if left value is greater than middle value we can't accurately know what's on the left side
    // we'll check to see if our target falls in between the middle and right values
    // if it does move the left else the right
    // we do the reverse assessment in the else statement
    if (numL > numM) {
      if (target > numM && target <= numR)
        l = mid + 1;
      else
        r = mid - 1;
    }

    else {
      if (target >= numL && target < numM)
        r = mid - 1;
      else
        l = mid + 1;
    }

  }

  return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); // 4
console.log(search([4, 5, 6, 7, 0, 1, 2], 3)); // -1
console.log(search([5, 1, 3], 5)); // 0
console.log(search([4, 5, 1, 3], 5)); // 1
console.log(search([5, 1, 3], 3)); // 2
console.log(search([4, 5, 6, 7, 8, 1, 2, 3], 8)); // 4
console.log(search([5, 1, 2, 3, 4], 1)); // 1

/* 
    1. Search left if target is less than midpoint and is greater than or equal to left
    2. Search left if target greater than midpoint and right

    3. Search right if target is greater than midpoint and less or equal to right

*/

/* 
FIND 4

 L        M           R
[1, 2, 3, 4, 5, 6, 7, 8] FOUND

 L        M           R
[8, 1, 2, 3, 4, 5, 6, 7]  (8 - 3 & 3 - 7)
 L  M     R
[4, 5, 6, 7] 
LRM
[4]

 L        M           R
[7, 8, 1, 2, 3, 4, 5, 6] (7 - 2 & 2 - 6)
 
 L        M           R
[6, 7, 8, 1, 2, 3, 4, 5] (6 - 1 & 1 - 5)
 
 L        M           R
[5, 6, 7, 8, 1, 2, 3, 4] (5 - 8 & 8 - 4 )

 L        M           R
[4, 5, 6, 7, 8, 1, 2, 3] (4 - 7 & 7 - 3 )

 L        M           R
[3, 4, 5, 6, 7, 8, 1, 2] (3 - 6 & 6 - 2 )

 L        M           R
[2, 3, 4, 5, 6, 7, 8, 1] (2 - 5 & 5 - 1 )
*/
