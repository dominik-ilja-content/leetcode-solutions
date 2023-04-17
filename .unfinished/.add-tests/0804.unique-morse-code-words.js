/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  const morse = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];
  const code = "a".charCodeAt(0);
  const map = {};
  let count = 0;

  for (let i = 0, word; i < words.length; i++) {
    let trans = '';
    word = words[i];

    for (let j = 0, idx; j < word.length; j++) {
      // get the 0 based index to access matching letter in morse code array
      idx = word[j].charCodeAt(0) - code;
      trans += morse[idx];
    }

    if (map[trans] === undefined) {
      map[trans] = true;
      count += 1;
    }
  }

  return count;
};
