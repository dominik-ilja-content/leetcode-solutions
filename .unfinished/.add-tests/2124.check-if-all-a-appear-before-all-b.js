/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function (s) {
  let idxA, idxB;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'b' && idxB === undefined)
      idxB = i;
    else if (s[i] === 'a')
      idxA = i;
  }

  // is last a before first b
  return (idxA === undefined || idxB === undefined) || idxA < idxB;
};

console.log(checkString("aaabbb"));
console.log(checkString("abab"));
console.log(checkString("aaaa"));
console.log(checkString("bbbb"));
