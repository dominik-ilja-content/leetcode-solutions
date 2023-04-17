/*

    Find the one element that appears ONE time

    - Time  O(n)
    - Space O(1)

    What if we tried to use math to keep track of the elements

    total = 0

    [2, 2, 1]

    if total < 0 total += n[i]
    else total -= n[i]

    t=0   t-=2  t=-2
    t=-2  t+=2  t=0
    t=0   t-=1  t=-1

    How would this look with negative numbers
    [-2, -2, -1]

    t=0   t-=-2  t=2
    t=2   t-=-2  t=0
    t=0   t-=-1  t=1

    Simply reverse the sign of the result at the end

    We need to perform a check to see if the number we're currently working
    with is positive or negative

    sum = 10
    4 + 1 + 2 + 1 + 2 = 10, 4 = 6
    8 + 2 + 4 + 2 + 4 = 20
    3, 3, 1, 1, 2


    sum = 15
    4, 4, 3, 3, 1
*/

/*

    BITWISE OPERATIONS
    ------------------

    We can use the Bitwise XOR operator '^'
    to cancel out the bits of the duplicate numbers


*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  if (nums.length === 0) return null;

  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {
    result ^= nums[i];
  }

  return result;
};

singleNumber([2, 2, 1]);
singleNumber([-2, -2, -1]);

module.exports = singleNumber;
