/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let idx = 0;
  let letterOfWord1WillBeAdded = true;
  let output = "";

  while (idx < word1.length && idx < word2.length) {
    if (letterOfWord1WillBeAdded) {
      output += word1[idx];
      letterOfWord1WillBeAdded = false;
    } else {
      output += word2[idx];
      letterOfWord1WillBeAdded = true;
      idx += 1;
    }
  }

  if (word1.length > idx) {
    output += word1.substring(idx);
  }
  if (word2.length > idx) {
    output += word2.substring(idx);
  }

  return output;
};

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  const length = word1.length > word2.length ? word1.length : word2.length;
  let output = "";

  for (let i = 0; i < length; i++) {
    if (word1[i] !== undefined) output += word1[i];
    if (word2[i] !== undefined) output += word2[i];
  }

  return output;
};

module.exports = mergeAlternately;
