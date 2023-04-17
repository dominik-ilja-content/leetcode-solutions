/* 
# COMPLETED 2022/09/08

Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

 
Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.

Example 2:

Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

Example 3:

Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.

 
Constraints:

    1 <= s.length <= 104
    s consists of only English letters and spaces ' '.
    There will be at least one word in s.


*/

/**
 * @param {string} s
 * @return {number}
 */
// SOLUTION 2
var lengthOfLastWord = function (s) {
  let i = s.length - 1, count = 0;

  while (s[i] === ' ') i -= 1;
  while (i >= 0 && s[i] !== ' ') i -= 1, count += 1;

  return count;
};

// SOLUTION 1
// var lengthOfLastWord = function (s) {
//   if (s.length === 0) return 0;

//   const words = s.trimEnd().split(' ');

//   return words[words.length - 1].length;

// };



module.exports = lengthOfLastWord;
