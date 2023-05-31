/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const cache = {};

  function helper(index) {
    if (cache[index] !== undefined) return cache[index];
    if (index === s.length) return true;

    for (let word of wordDict) {
      const endIndex = index + word.length;

      if (word === s.substring(index, endIndex)) {
        const result = helper(endIndex);
        console.log(result);
        if (result) {
          cache[index] = result;
          return result;
        }
      }
    }

    cache[index] = false;
    return false;
  }

  return helper(0);
};

let s = "catsandog";
let wordDict = ["cats", "dog", "sand", "and", "cat"];
// s = "applepenapple";
// wordDict = ["apple", "pen"];
// s = "cars";
// wordDict = ["car", "ca", "rs"];
// s =
//   "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab";
// wordDict = [
//   "a",
//   "aa",
//   "aaa",
//   "aaaa",
//   "aaaaa",
//   "aaaaaa",
//   "aaaaaaa",
//   "aaaaaaaa",
//   "aaaaaaaaa",
//   "aaaaaaaaaa",
// ];
// s = "aacaabbz";
// wordDict = ["a", "aa", "bb", "c"];

console.log(wordBreak(s, wordDict));

module.exports = wordBreak;
