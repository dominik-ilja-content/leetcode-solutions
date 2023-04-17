// 00000001
// 00000010
// 00000011
// 00000100

/* 
  JavaScript stores numbers as 64 bit floating point numbers
  Numbers are converted into 32 bit signed integers during bitwise operations
  They're then converted back to 64 bit floating point numbers once the operation is done

  A signed integer uses the leftmost bit as the minus sign
*/

// # BITWISE OR
// Will return 1 if one of the bits is 1

//              FFFFFTTF
//          2 = 00000010
//          4 = 00000100
// result = 6 = 00000110
console.log(6 | 2);

// # BITWISE AND
// Will return 1 if both bits are 1

//              FFFFFFFF
//          2 = 00000010
//          4 = 00000100
// result = 0 = 00000000
console.log(4 & 2);

//              FFFFFFTF
//          2 = 00000010
//          6 = 00000110
// result = 2 = 00000010
console.log(6 & 2);

// BITWISE XOR
// Will return 1 if the bits are different

// BITWISE NOT
// Will invert every bit
//           10 = 00000000 00000000 00000000 00001010
// result = -11 = 11111111 11111111 11111111 11110101
console.log(~10);

console.log((-10).toString(2));

// BITWISE 
// BITWISE 
// BITWISE 

// 00000000 00000000 00000000 00000000


var getSum = function (a, b) {
  let tb = b;
  let res = a;

  while (tb) {
    let temp = (res & tb) << 1;
    res = res ^ tb;
    tb = temp;
    console.log(res, tb);
  }

  return res;
};
console.log(getSum(5, 6));


