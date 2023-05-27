/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function (words, left, right) {
  const vowels = ["a", "e", "i", "o", "u"];
  let output = 0;

  // if both are undefined don't do anything
  // we check only if left index is defined
  for (let i = left; i <= right; i++) {
    const word = words[i];

    if (vowels.includes(word[0]) && vowels.includes(word[word.length - 1])) {
      output += 1;
    }
  }

  return output;
};

// if (word[left] !== undefined) {
//   if (word[right] === undefined) {
//     if (vowels.includes(word[left])) output += 1;
//   } else if (vowels.includes(word[left]) && vowels.includes(word[right])) {
//     output += 1;
//   }
// }
console.log(vowelStrings(["are", "amy", "u"], 0, 2));
console.log(vowelStrings(["hey", "aeo", "mu", "ooo", "artro"], 1, 4));

module.exports = vowelStrings;
