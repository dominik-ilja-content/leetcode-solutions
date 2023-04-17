/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const map = {};

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (map[char] === undefined)
      map[char] = { index: i, count: 1 };
    else
      map[char].count += 1;
  }

  for (let key in map) {
    if (map[key].count === 1) return map[key].index;
  }

  return -1;
};

console.log(firstUniqChar("loveleetcode"));
