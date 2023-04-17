/* 
Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.

Example 2:

Input: s = "cbbd"
Output: "bb"

*/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let result = "";

  function findPalindrome(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > result.length)
        result = s.substring(left, right + 1);

      left -= 1, right += 1;
    }
  }

  for (let i = 0; i < s.length; i++) {
    findPalindrome(i, i);
    findPalindrome(i, i + 1);
  }

  return result;
};

console.log(longestPalindrome('babad'));
console.log(longestPalindrome('cbbd'));
