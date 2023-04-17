/*

    Array of integers of size "n"

    Task: Return Majority Element

      - Majority element is element that appears more than `n/2` times
        - Element that appears more than half the array items
      - We can assume this element always exists

    Extras:

      - Time : O(n)
      - Space: O(1)

    I think if a question asks you to work with an array of numbers
    and wants you to do it in O(n) time and O(1) space we'll be dealing
    with a Bit Manipulation question.

*/

// SOLUTION WITH HASH MAP

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  if (nums.length === 1) return nums[0];

  const map = new Map();
  const halfOfLength = nums.length / 2;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (map.has(num)) {
      const val = map.get(num) + 1;

      if (val > halfOfLength) {
        return num;
      }

      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  }

  return null;
};

// SOLUTION USING BIT MANIPULATION
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const len = nums.length;
  let majority = 0;

  for (let i = 0; i < 32; i++) {
    let bit = 1 << i;
    let count = 0;

    nums.forEach((num) => {
      if ((num & bit) != 0) {
        count += 1;
      }
    });

    if (count > len / 2) {
      majority |= bit;
    }
  }

  return majority;
};

// SOLUTION USING BOYER-MOORE

/*

    If we know that an element has at least one element for than half of the array
    then we can do the following:

    Let's say the number 1 makes up 6 of the 11 elements

      - Keep a count for the current element

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  if (nums.length === 1) return nums[0];

  let count = 1;
  let majority = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];

    if (num === majority) {
      count += 1;
    } else {
      if (count === 0) {
        majority = num;
        count = 1;
      } else {
        count -= 1;
      }
    }
  }

  return majority;
};

majorityElement([7, 13, 7]);

module.exports = majorityElement;
