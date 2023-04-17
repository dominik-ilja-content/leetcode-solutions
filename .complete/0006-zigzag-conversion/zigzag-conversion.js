/**
 * @param {string} s
 * @param {number} num_rows
 * @return {string}
 */
var convert = function (s, num_rows) {
  if (num_rows <= 1 || s.length < num_rows) return s;

  const rows = Array(num_rows).fill("");

  for (let i = 0, row_idx = 0, reverse = false; i < s.length; i++) {
    rows[row_idx] += s[i];

    if (reverse && row_idx === 0) {
      reverse = false;
    }
    if (!reverse && row_idx === num_rows - 1) {
      reverse = true;
    }

    reverse ? (row_idx -= 1) : (row_idx += 1);
  }

  return rows.join("");
};

module.exports = convert;
