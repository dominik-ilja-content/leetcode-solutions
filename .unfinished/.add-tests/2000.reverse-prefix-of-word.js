/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
  const idx = word.indexOf(ch);
  let output = "";

  // word doesn't have search character in it
  if (idx < 0) return word;

  // reverse prefix
  for (let i = idx; i >= 0; i--) {
    output += word[i];
  }

  // add on result of word
  for (let i = idx + 1; i < word.length; i++) {
    output += word[i];
  }

  return output;
};

console.log(reversePrefix("abcdefd", "d"));
