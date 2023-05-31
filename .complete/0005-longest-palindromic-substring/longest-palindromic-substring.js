/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let longestLeft = 0;
  let longestRight = 0;

  function findSubPalindromeIndexes(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left > longestRight - longestLeft) {
        longestLeft = left;
        longestRight = right;
      }
      left -= 1;
      right += 1;
    }
  }

  for (let i = 0; i < s.length; i++) {
    findSubPalindromeIndexes(i, i);
    findSubPalindromeIndexes(i, i + 1);
  }

  return s.substring(longestLeft, longestRight + 1);
};

module.exports = longestPalindrome;
