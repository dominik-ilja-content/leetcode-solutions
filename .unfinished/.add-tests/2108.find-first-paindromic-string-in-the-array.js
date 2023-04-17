/**
 * @param {string[]} words
 * @return {string}
 */

function isPalindrome(str) {
  let isPalin = true;

  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - i - 1]) {
      isPalin = false;
      break;
    }
  }

  return isPalin;
}

var firstPalindrome = function (words) {
  for (let i = 0; i < words.length; i++) {
    if (isPalindrome(words[i])) return words[i];
  }


  return '';
};
