/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  const map = {};
  let count = 0;

  for (let i = 0; i < sentence.length; i++) {
    if (map[sentence[i]] === undefined) {
      map[sentence[i]] = true;
      count += 1;
    }
  }

  return count === 26; // 26 is for letters in alphabet
};
