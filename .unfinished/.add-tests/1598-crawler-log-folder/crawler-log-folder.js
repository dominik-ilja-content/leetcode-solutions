/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {
  let depth = 0;

  for (let i = 0; i < logs.length; i++) {
    const log = logs[i];

    if (log === "../") {
      if (depth > 0) {
        depth -= 1;
      }
    } else if (log !== "./") {
      depth += 1;
    }
  }

  return depth;
};

module.exports = minOperations;
