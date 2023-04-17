/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s, k) {
  let sen = "", count = k;

  for (let i = 0, char; i < s.length; i++) {
    char = s[i];

    if (char === " ") count -= 1;
    if (count === 0) break;

    sen += char;

  }

  return sen;
};
