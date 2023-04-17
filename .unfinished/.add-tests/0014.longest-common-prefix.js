/* 
# COMPLETED 2022/09/06

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".


Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"


Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.


Constraints:

    1 <= strs.length <= 200
    0 <= strs[i].length <= 200
    strs[i] consists of only lowercase English letters.

*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return '';

  // only one word meaning prefix is the entire word. return that word.
  if (strs.length === 1) return strs[0];

  // we'll use this string to compare against the other strings to see if they share a prefix
  const comparer = strs[0];
  // the common shared prefix that will be returned
  let prefix = '';


  for (let i = 1; i < strs.length; i++) {
    // current item we're on
    const curr = strs[i];
    // smaller length between the two items being compared
    const length = comparer.length > curr.length ? comparer.length : curr.length;
    // prefix shared between two items
    let shared = '';

    // We'll add characters to shared until they no longer match
    for (let j = 0; j < length; j++) {
      if (comparer[j] === curr[j]) {
        shared += comparer[j];
      } else {
        break;
      }
    }

    // if no matches that means we have no common prefix just return
    // else assign the smallest prefix to prefix
    if (shared === '') {
      return shared;
    }
    else {
      const isLTE = prefix.length <= shared.length;
      // if prefix length is LTE to shared keep prefix else assign it the value of shared;
      prefix = isLTE && prefix !== '' ? prefix : shared;

    }

  }

  return prefix;
};

module.exports = longestCommonPrefix;
