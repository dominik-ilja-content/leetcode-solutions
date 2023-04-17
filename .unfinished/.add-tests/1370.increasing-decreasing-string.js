/**
 * @param {string} s
 * @return {string}
 */
var sortString = function (s) {
  // get counts
  const counts = [], code = "a".charCodeAt(0);
  let output = "";

  for (let i = 0, idx; i < s.length; i++) {
    idx = s[i].charCodeAt(0) - code;

    if (counts[idx] === undefined) {
      counts[idx] = 1;
    }
    else {
      counts[idx] += 1;
    }
  }


  while (output.length < s.length) {
    // add smallest char
    let idx = 0, count;
    while (idx < counts.length) {
      count = counts[idx];

      if (count > 0) {
        output += String.fromCharCode(code + idx);
        counts[idx] -= 1;
      }

      idx += 1;
    }

    // add largest char
    idx = counts.length - 1;
    while (idx >= 0) {
      count = counts[idx];

      if (count > 0) {
        output += String.fromCharCode(code + idx);
        counts[idx] -= 1;
      }

      idx -= 1;
    }
  }

  return output;
};

console.log(sortString("aaaabbbbcccc"));
console.log(sortString("rat"));
