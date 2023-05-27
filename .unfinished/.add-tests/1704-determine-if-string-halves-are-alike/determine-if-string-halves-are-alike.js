/*
    2 <= s.length <= 1000
    s.length is even.
    s consists of uppercase and lowercase letters.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  s = s.toLowerCase();
  const vowels = ["a", "e", "i", "o", "u"];
  let vowelsInRightHalf = 0;
  let vowelsInLeftHalf = 0;

  for (let i = 0; i < s.length / 2; i++) {
    if (vowels.includes(s[i])) {
      vowelsInLeftHalf += 1;
    }
    if (vowels.includes(s[s.length - i - 1])) {
      vowelsInRightHalf += 1;
    }
  }

  return vowelsInLeftHalf === vowelsInRightHalf;
};

console.log(halvesAreAlike("book")); // true
console.log(halvesAreAlike("textbook")); // false
console.log(halvesAreAlike("Uo")); // true

module.exports = halvesAreAlike;
