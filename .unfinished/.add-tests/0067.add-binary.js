/* 
# COMPLETED 2022/09/08

Given two binary strings a and b, return their sum as a binary string.

 
Example 1:

Input: a = "11", b = "1"
Output: "100"

Example 2:

Input: a = "1010", b = "1011"
Output: "10101"

 
Constraints:

    1 <= a.length, b.length <= 104
    a and b consist only of '0' or '1' characters.
    Each string does not contain leading zeros except for the zero itself.


*/


/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
// Solution 1
var addBinary = function (a, b) {
  let [long, short] = a.length > b.length ? [a, b] : [b, a];
  const len = long.length - short.length;

  // adding leading zeros to shorter binary number
  for (let i = 0; i < len; i++) {
    short = '0' + short;
  }

  let result = '';
  let carry = 0;

  for (let i = long.length - 1; i >= 0; i--) {
    const aNum = parseInt(long[i]), bNum = parseInt(short[i]);
    const total = aNum + bNum + carry;

    if (total >= 2) {
      const digit = total % 2;
      carry = Math.floor(total / 2);
      result = digit.toString() + result;
    }
    else {
      carry = 0;
      result = total.toString() + result;
    }
  }

  if (carry > 0) {
    result = carry.toString() + result;
  }

  return result;
};

// Solution 2
var addBinary = function (a, b) {
  let [long, short] = a.length > b.length ? [a, b] : [b, a];
  const len = long.length - short.length;

  // adding leading zeros to shorter binary number
  for (let i = 0; i < len; i++) {
    short = '0' + short;
  }

  let result = '';
  let carry = 0;

  for (let i = long.length - 1; i >= 0; i--) {
    const aNum = parseInt(long[i]), bNum = parseInt(short[i]);
    const total = aNum + bNum + carry;
    const digit = total % 2;

    carry = Math.floor(total / 2);
    result = digit.toString() + result;
  }

  if (carry > 0) {
    result = carry.toString() + result;
  }

  return result;
};

// Final Solution
var addBinary = function (a, b) {
  let result = '';
  let carry = 0;

  let aPointer = a.length - 1;
  let bPointer = b.length - 1;

  while (aPointer >= 0 || bPointer >= 0) {
    const aNum = parseInt(a[aPointer]) || 0,
      bNum = parseInt(b[bPointer]) || 0,
      total = aNum + bNum + carry,
      digit = (total % 2).toString();

    carry = Math.floor(total / 2);
    result = digit + result;
    aPointer -= 1;
    bPointer -= 1;
  }

  if (carry !== 0) result = carry.toString() + result;

  return result;

};

module.exports = addBinary;
