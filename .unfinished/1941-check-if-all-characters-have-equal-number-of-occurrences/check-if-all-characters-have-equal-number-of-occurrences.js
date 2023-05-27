/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
  const map = {};

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] === undefined) {
      map[s[i]] = 1;
    } else {
      map[s[i]] += 1;
    }
  }

  let occurrence = null;
  for (let key in map) {
    if (occurrence === null) {
      occurrence = map[key];
    } else if (map[key] !== occurrence) {
      return false;
    }
  }

  return true;
};

console.log(areOccurrencesEqual("abacbc")); // true
console.log(areOccurrencesEqual("aaabb")); // false

module.exports = areOccurrencesEqual;
