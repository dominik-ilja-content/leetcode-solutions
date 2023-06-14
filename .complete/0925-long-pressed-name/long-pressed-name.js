/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
  if (name === typed) {
    return true;
  }

  let nameIdx = 0;
  let typedIdx = 0;

  while (nameIdx < name.length || typedIdx < typed.length) {
    if (name[nameIdx] !== typed[typedIdx]) {
      return false;
    }

    let nameCount = 1;
    let typedCount = 1;

    while (name[nameIdx] === name[nameIdx + 1]) {
      nameCount += 1;
      nameIdx += 1;
    }
    while (typed[typedIdx] === typed[typedIdx + 1]) {
      typedCount += 1;
      typedIdx += 1;
    }

    if (nameCount > typedCount) {
      return false;
    }

    nameIdx += 1;
    typedIdx += 1;
  }

  return true;
};

module.exports = isLongPressedName;
