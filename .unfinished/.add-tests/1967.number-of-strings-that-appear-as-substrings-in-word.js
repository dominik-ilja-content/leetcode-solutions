/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function (patterns, word) {
  const map = {};
  let count = 0;

  for (let i = 0, pattern; i < patterns.length; i++) {
    pattern = patterns[i];

    if (pattern.length > word.length) map[pattern] = false;
    if (map[pattern] !== undefined) {
      if (map[pattern]) count += 1;
    }
    else {
      const includes = word.includes(pattern);
      map[pattern] = includes;

      if (includes) count += 1;
    }
  }

  return count;
};
