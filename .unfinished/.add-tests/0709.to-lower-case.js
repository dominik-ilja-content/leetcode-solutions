/**
 * @param {string} s
 * @return {string}
 */
/* 
    add 32 to char code and check to make sure it's between "a" and "z"
*/
var toLowerCase = function (s) {
  const codeForA = 'A'.charCodeAt(0);
  const codeForZ = codeForA + 25;
  let output = '';

  for (let i = 0, code; i < s.length; i++) {
    code = s[i].charCodeAt(0);

    if (code >= codeForA && code <= codeForZ) {
      code += 32;
    }

    output += String.fromCharCode(code);
  }

  return output;
};

console.log(toLowerCase("HELLO"));
