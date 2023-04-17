/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */

function createCharMap(str) {
  const map = {};

  for (let i = 0, char; i < str.length; i++) {
    char = str[i];

    if (map[char] === undefined)
      map[char] = 1;
    else
      map[char] += 1;
  }

  return map;
}

var findTheDifference = function (s, t) {
  const cMap = createCharMap(s), tMap = createCharMap(t);

  for (let key in tMap) {
    if (tMap[key] !== cMap[key]) return key;
  }
};
