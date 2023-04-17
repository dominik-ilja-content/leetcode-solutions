/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

function assignCharCode(char) {
  return char === undefined ? '0'.charCodeAt(0) : char.charCodeAt(0);
}

var addStrings = function (num1, num2) {
  const baseCode = "0".charCodeAt(0);
  let output = '',
    idx1 = num1.length - 1,
    idx2 = num2.length - 1,
    carry = 0;

  while (idx1 >= 0 || idx2 >= 0) {
    let digit1 = assignCharCode(num1[idx1]) - baseCode,
      digit2 = assignCharCode(num2[idx2]) - baseCode,
      sum = digit1 + digit2 + carry;

    if (sum >= 10) {
      carry = 1;
      sum -= 10;
    }
    else {
      carry = 0;
    }

    output = String.fromCharCode(sum + baseCode) + output;

    idx1 -= 1, idx2 -= 1;
  }

  if (carry > 0) output = carry.toString() + output;

  return output;
};

console.log(addStrings("1", "1"));
console.log(addStrings("9", "9"));
console.log(addStrings("11", "9"));
// console.log(addStrings("11", "123"));

/* 
     
  "11"
    ^

  "123"
     ^
*/
