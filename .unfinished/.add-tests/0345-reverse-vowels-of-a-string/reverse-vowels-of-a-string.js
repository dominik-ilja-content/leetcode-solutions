/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const output = s.split(""); // make an array so that we can swap indexes
  let left = 0;
  let right = s.length - 1;
  let vowels = { a: true, e: true, i: true, o: true, u: true };

  while (left <= right) {
    const leftLetter = output[left].toLowerCase();
    const rightLetter = output[right].toLowerCase();

    if (vowels[leftLetter] && vowels[rightLetter]) {
      // swap values
      const temp = output[left];
      output[left] = output[right];
      output[right] = temp;
      left += 1;
      right -= 1;
    }
    if (vowels[leftLetter] === undefined && vowels[rightLetter] === undefined) {
      left += 1;
      right -= 1;
    }
    if (vowels[leftLetter] && vowels[rightLetter] === undefined) {
      right -= 1;
    }
    if (vowels[rightLetter] && vowels[leftLetter] === undefined) {
      left += 1;
    }
  }

  return output.join("");
};

module.exports = reverseVowels;
