/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
/*
      L
    ["h","e","l","l","o"]
                      R
*/

var reverseString = function (s) {
  for (let i = 0, temp; i < Math.floor(s.length / 2); i++) {
    let endSwapIdx = s.length - 1 - i;

    temp = s[i];
    s[i] = s[endSwapIdx];
    s[endSwapIdx] = temp;
  }

};
