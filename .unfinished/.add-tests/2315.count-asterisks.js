/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function (s) {
  let pairs = 0, asterisks = 0;

  for (let i = 0, ch; i < s.length; i++) {
    ch = s[i];

    if (ch === "|") {
      pairs = pairs === 0 ? 1 : 0;
    }

    if (ch === "*" && pairs === 0) asterisks += 1;
  }

  return asterisks;
};
