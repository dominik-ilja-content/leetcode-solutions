/*
    What is the time and space complexity?

    Each time a new digit is added the amount of work goes up by a power.
    The most numbers a digit can have is 4.

    For an input of, "9999" the first loop gives us 4 combinations.

    ['w', 'x', 'y', 'z']

    The second loop adds 4 combinations for each pre-existing combination.
    Resulting in 16 combinations after the second loop.

    [
      'ww', 'xw', 'yw', 'zw', 'wx', 'xx', 'yx', 'zx',
      'wy', 'xy', 'yy', 'zy', 'wz', 'xz', 'yz', 'zz'
    ]

    The third loop repeats the process bringing the combinations from 16 to 64

    [
      'www', 'xww', 'yww', 'zww', 'wxw', 'xxw', 'yxw', 'zxw',
      'wyw', 'xyw', 'yyw', 'zyw', 'wzw', 'xzw', 'yzw', 'zzw',
      'wwx', 'xwx', 'ywx', 'zwx', 'wxx', 'xxx', 'yxx', 'zxx',
      'wyx', 'xyx', 'yyx', 'zyx', 'wzx', 'xzx', 'yzx', 'zzx',
      'wwy', 'xwy', 'ywy', 'zwy', 'wxy', 'xxy', 'yxy', 'zxy',
      'wyy', 'xyy', 'yyy', 'zyy', 'wzy', 'xzy', 'yzy', 'zzy',
      'wwz', 'xwz', 'ywz', 'zwz', 'wxz', 'xxz', 'yxz', 'zxz',
      'wyz', 'xyz', 'yyz', 'zyz', 'wzz', 'xzz', 'yzz', 'zzz'
    ]

    The fourth loops brings the combinations to a total of 256.

    The time complexity would be O(4^d) because for each digit the amount of work
    that is performed grows by a factor of 4 in the worst case.

    The space complexity would be O(4^d) because for each digit the array that stores
    the values grows by a factor of 4 in the worst case.
*/

/* Iterative */

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const digitMap = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  let combinations = [];

  for (let digit of digits) {
    const newCombinations = [];

    for (let char of digitMap[digit]) {
      if (combinations.length === 0) {
        newCombinations.push(char);
      } else {
        for (let combo of combinations) {
          newCombinations.push(combo + char);
        }
      }
    }
    combinations = newCombinations;
  }
  return combinations;
};

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length === 0) return [];

  const digitMap = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  let combinations = [];

  for (let digit of digits) {
    const newCombinations = [];

    for (let char of digitMap[digit]) {
      if (combinations.length === 0) {
        newCombinations.push(char);
      } else {
        for (let combo of combinations) {
          newCombinations.push(combo + char);
        }
      }
    }
    combinations = newCombinations;
  }
  return combinations;
};

/* Recursive / Iterative */

var letterCombinations = function (digits) {
  const pad = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  const res = [];
  let len = digits.length;
  if (!len) return [];

  function comb(pos, str) {
    if (pos === len) {
      res.push(str);
    } else {
      let chars = pad[digits[pos]];
      for (let i = 0; i < chars.length; i++) {
        comb(pos + 1, str + chars[i]);
      }
    }
  }
  comb(0, "");
  return res;
};

module.exports = letterCombinations;
