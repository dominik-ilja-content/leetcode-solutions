/**
 * @param {string} s
 * @return {boolean}
 */
function removeNonAlphanumeric(str) {
  let output = '';

  for (let i = 0; i < str.length; i++) {
    if (/[A-Za-z0-9]/.test(str[i])) output += str[i];
  }

  return output;
}

var isPalindrome = function (s) {
  // remove non-alphanumeric characters
  let str = removeNonAlphanumeric(s).toLowerCase();

  // check if the string is a palindrome
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    if (str[i] !== str[str.length - 1 - i]) return false;
  }

  return true;
};


console.log(isPalindrome("A man, a plan, a canal: Panama"));
