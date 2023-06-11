/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  let charCount = {};

  for (let i = 0; i < s.length; i++) {
    const letter = s[i];

    if (charCount[letter] !== undefined) {
      charCount[letter] += 1;
    } else {
      charCount[letter] = 1;
    }
  }

  let output = 0;
  let oddCharacterIsUsed = false; // a single odd character can be used in a palindrome

  for (let key in charCount) {
    const value = charCount[key];
    if (value % 2 === 0) {
      output += value;
    } else {
      output += value - 1; // gives an even value of characters
      oddCharacterIsUsed = true;
    }
  }

  return oddCharacterIsUsed ? output + 1 : output;
};
