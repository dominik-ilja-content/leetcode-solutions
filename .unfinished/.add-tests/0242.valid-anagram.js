/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  if (s === t) return true;

  const sLetters = {}, tLetters = {};

  function addToMap(map, el) {
    if (map[el] === undefined) map[el] = 1;
    else map[el] += 1;
  }

  for (let i = 0; i < s.length; i++) {
    addToMap(sLetters, s[i]);
    addToMap(tLetters, t[i]);
  }

  // compare all letters 
  for (let key in sLetters) {
    if (sLetters[key] !== tLetters[key]) return false;
  }

  return true;
};

console.log(isAnagram('a', 'a'));
