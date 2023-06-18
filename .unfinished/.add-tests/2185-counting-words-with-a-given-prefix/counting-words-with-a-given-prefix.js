/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function (words, pref) {
  let matches = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].substring(0, pref.length) === pref) {
      matches += 1;
    }
  }

  return matches;
};

module.exports = prefixCount;
