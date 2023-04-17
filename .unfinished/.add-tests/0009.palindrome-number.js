// COMPLETED ON 2022/09/02

/* 
Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

    For example, 121 is a palindrome while 123 is not.

*/

/* 
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
*/

/* 
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
*/

/* 
Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
*/

/* 
Follow up: Could you solve it without converting the integer to a string?
*/

/**
 * @param {number} x
 * @return {boolean}
 */

// string version
var isPalindrome = function (x) {
  // anything less than 0 is not palindrome
  if (x < 0) return false;

  const str = x.toString();

  // if length is 1 the number is a palindrome
  if (str.length === 1) return true;

  // 10 has length of 2 so end will be 1
  /*
  What we want is to move both pointers one index at a time so they're comparing their pair
        e
      10
      s

  We will break when the pointers are the same or when the end is less than the start
      e
      10
       s

        e      e
      101 =>  101
      s        s
  */

  // create pointers to compare the ends of the string
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    const startChar = str[start];
    const endChar = str[end];

    if (startChar !== endChar) return false;

    start += 1;
    end -= 1;
  }

  return true;
};

// number version
var isPalindrome = function (x) {
  if (x < 0) return false;
  if (x < 10) return true;

  // while base > 0

  let base = x; // 1001
  let result = 0;

  while (base > 0) {
    const remainder = base % 10; // 1
    base = Math.floor(base / 10); // 100
    result = (result * 10) + remainder; // 0 * 10 + 1 = 1
  }

  return x === result;
};

// console.log(isPalindrome(10));
console.log(isPalindrome(1001));

module.exports = isPalindrome;
