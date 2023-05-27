/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
  const output = [];
  let nextValue = null;

  for (let i = 0; i <= s.length; i++) {
    if (s[i] === "I") {
      nextValue = "larger";
    } else {
      nextValue = "smaller";
    }

    if (s[i - 1] !== undefined) {
      if ()
    } else {
      if (nextValue === "larger") {
        output.push(0);
      } else {
        output.push(s.length);
      }
    }
  }

  return output;
};

/*
    Numbers are from 0 to n where n is the length of the string.
    If the char is I, the value after it must be larger.
    If the char is D, the value after it must be smaller.

    Each character we need to check to the left and the right sides
    to make sure the conditions match.

    s[i] == 'I' if perm[i] < perm[i + 1], and
    s[i] == 'D' if perm[i] > perm[i + 1].

*/

console.log(diStringMatch("IDID"));
console.log(diStringMatch("III"));
console.log(diStringMatch("DDI"));

module.exports = diStringMatch;
