/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  const key = {};
  let count = 0, isAllowed = true;

  // add allowed characters to key
  for (let i = 0, ch; i < allowed.length; i++) {
    ch = allowed[i];
    if (key[ch] === undefined) key[ch] = true;
  }

  for (let i = 0, word; i < words.length; i++) {
    word = words[i], isAllowed = true;

    for (let j = 0, ch; j < word.length; j++) {
      ch = word[j];

      if (key[ch] === undefined) {
        isAllowed = false;
        break;
      }
    }

    if (isAllowed) count += 1;
  }

  return count;
};
