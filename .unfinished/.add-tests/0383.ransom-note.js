/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

function getCharsMap(str) {
  const map = {};

  for (let i = 0, char; i < str.length; i++) {
    char = str[i];

    if (map[char] === undefined) map[char] = 1;
    else map[char] += 1;
  }

  return map;
}

var canConstruct = function (ransomNote, magazine) {
  const ransomMap = getCharsMap(ransomNote),
    magazineMap = getCharsMap(magazine);

  for (let key in ransomMap) {
    if (magazineMap[key] === undefined || ransomMap[key] > magazineMap[key])
      return false;
  }

  return true;
};
