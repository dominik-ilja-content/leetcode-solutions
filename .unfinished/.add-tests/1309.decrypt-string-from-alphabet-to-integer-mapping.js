/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function (s) {
  const baseCode = 'a'.charCodeAt(0) - 1;
  let output = '';

  for (let i = s.length - 1, code; i >= 0; i--) {
    if (s[i] === "#") {
      code = parseInt(s[i - 2] + s[i - 1]);
      i -= 2;
    }
    else {
      code = parseInt(s[i]);
    }

    output = String.fromCharCode(baseCode + code) + output;
  }

  return output;
};

console.log(freqAlphabets("10#11#12"));
console.log(freqAlphabets("1326#"));
console.log(freqAlphabets("10#11#12#"));
