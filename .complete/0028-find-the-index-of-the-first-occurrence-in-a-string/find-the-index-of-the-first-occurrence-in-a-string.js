/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle.length > haystack.length) return -1;

  const queue = [];

  let haystackIndex = 0;
  let needleIndex = 0;
  let needleFirstLetter = needle[0];

  while (haystackIndex < haystack.length) {
    let haystackLetter = haystack[haystackIndex];
    let needleLetter = needle[needleIndex];
    let indexWasTakenFromQueue = false;

    if (needleIndex !== 0 && haystackLetter === needleFirstLetter) {
      queue.push(haystackIndex);
    }

    if (haystackLetter === needleLetter) {
      if (needleIndex === needle.length - 1) {
        return haystackIndex - needleIndex;
      } else {
        needleIndex += 1;
      }
    } else {
      if (queue.length > 0) {
        haystackIndex = queue.shift();
        indexWasTakenFromQueue = true;
      }
      needleIndex = 0;
    }

    if (!indexWasTakenFromQueue) haystackIndex += 1;
  }

  return -1;
};

module.exports = strStr;
