/**
 * @param {string} s
 * @return {string}
 */

function shift(char, num) {
  const code = char.charCodeAt(0);
  return String.fromCharCode(code + num);
}

var replaceDigits = function (s) {
  let output = '', idx = 0, char, digit;

  while (idx < s.length) {
    char = s[idx], digit = parseInt(s[idx + 1]);

    if (idx + 1 < s.length) {
      output += char + shift(char, digit);
    } else {
      output += char;
    }

    idx += 2;
  }

  return output;
};

console.log(replaceDigits("a1b2c3d4e"));
