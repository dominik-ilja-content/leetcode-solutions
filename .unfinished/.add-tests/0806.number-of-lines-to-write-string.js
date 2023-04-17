/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function (widths, s) {
  const baseCode = 'a'.charCodeAt(0),
    maxLineWidth = 100;
  let totalLines = 1, currLineWidth = 0;

  for (let i = 0; i < s.length; i++) {
    const zeroBasedCode = s[i].charCodeAt(0) - baseCode,
      charWidth = widths[zeroBasedCode];

    if (currLineWidth + charWidth > maxLineWidth) {
      currLineWidth = 0;
      currLineWidth += charWidth;
      totalLines += 1;
    }
    else {
      currLineWidth += charWidth;
    }

  }

  return [totalLines, currLineWidth];
};

let widths = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], s = "abcdefghijklmnopqrstuvwxyz";

console.log(numberOfLines(widths, s));
console.log(numberOfLines([4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], "bbbcccdddaaa"));
