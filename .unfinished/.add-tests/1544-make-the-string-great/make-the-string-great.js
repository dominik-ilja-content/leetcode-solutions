/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
  // find the difference between the character codes for upper and lowercase letters
  const lowerCode = "a".charCodeAt(0);
  const upperCode = "A".charCodeAt(0);
  const codeDiffTarget = Math.abs(lowerCode - upperCode);
  const stack = [s[0]];

  for (let i = 1; i < s.length; i++) {
    let popOccurred = false;

    if (stack.length > 0) {
      const lastIdx = stack.length - 1;
      const code1 = stack[lastIdx].charCodeAt(0);
      const code2 = s[i].charCodeAt(0);
      const codeDiff = Math.abs(code1 - code2);

      if (codeDiff === codeDiffTarget) {
        stack.pop();
        popOccurred = true;
      }
    }
    if (!popOccurred) {
      stack.push(s[i]);
    }
  }

  return stack.join("");
};

module.exports = makeGood;
