/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = {}, result = [];

  for (let str of strs) {
    let sorted = str !== "" ? str.split("").sort().join("") : str;
    map[sorted] === undefined ? map[sorted] = [str] : map[sorted].push(str);
  }
  for (let key in map) {
    result.push(map[key]);
  }

  return result;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));
