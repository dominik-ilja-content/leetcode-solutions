/**
 * @param {string} s
 * @return {string}
 */

var reverseWords = function (s) {
  const words = s.split(" ");

  for (let i = 0, word; i < words.length; i++) {
    let reverse = '';
    word = words[i];

    for (let j = word.length - 1; j >= 0; j--) {
      reverse += word[j];
    }

    words[i] = reverse;
  }

  return words.join(" ");
};
