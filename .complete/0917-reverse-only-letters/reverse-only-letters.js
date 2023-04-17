/* Using Character Codes */

/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
  let reversedStringAsArray = Array(s.length);
  let left = 0;
  let right = s.length - 1;

  function isInRange(char) {
    const upperCaseLetterRangeStart = "A".charCodeAt(0);
    const upperCaseLetterRangeEnd = "Z".charCodeAt(0);
    const lowerCaseLetterRangeStart = "a".charCodeAt(0);
    const lowerCaseLetterRangeEnd = "z".charCodeAt(0);
    const charCode = char.charCodeAt(0);

    return (
      (charCode >= upperCaseLetterRangeStart &&
        charCode <= upperCaseLetterRangeEnd) ||
      (charCode >= lowerCaseLetterRangeStart &&
        charCode <= lowerCaseLetterRangeEnd)
    );
  }

  while (left <= right) {
    const leftCharacter = s[left];
    const rightCharacter = s[right];
    const leftIsValid = isInRange(leftCharacter);
    const rightIsValid = isInRange(rightCharacter);

    if (leftIsValid && rightIsValid) {
      reversedStringAsArray[left] = rightCharacter;
      reversedStringAsArray[right] = leftCharacter;
      left += 1;
      right -= 1;
    } else if (leftIsValid && !rightIsValid) {
      reversedStringAsArray[right] = rightCharacter;
      right -= 1;
    } else if (rightIsValid && !leftIsValid) {
      reversedStringAsArray[left] = leftCharacter;
      left += 1;
    } else {
      reversedStringAsArray[left] = leftCharacter;
      reversedStringAsArray[right] = rightCharacter;
      left += 1;
      right -= 1;
    }
  }

  return reversedStringAsArray.join("");
};

/* Using Regex */

/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
  let reversedStringAsArray = Array(s.length);
  let left = 0;
  let right = s.length - 1;

  function isInRange(char) {
    return /[a-zA-Z]/.test(char);
  }

  while (left <= right) {
    const leftCharacter = s[left];
    const rightCharacter = s[right];
    const leftIsValid = isInRange(leftCharacter);
    const rightIsValid = isInRange(rightCharacter);

    if (leftIsValid && rightIsValid) {
      reversedStringAsArray[left] = rightCharacter;
      reversedStringAsArray[right] = leftCharacter;
      left += 1;
      right -= 1;
    } else if (leftIsValid && !rightIsValid) {
      reversedStringAsArray[right] = rightCharacter;
      right -= 1;
    } else if (rightIsValid && !leftIsValid) {
      reversedStringAsArray[left] = leftCharacter;
      left += 1;
    } else {
      reversedStringAsArray[left] = leftCharacter;
      reversedStringAsArray[right] = rightCharacter;
      left += 1;
      right -= 1;
    }
  }

  return reversedStringAsArray.join("");
};

module.exports = reverseOnlyLetters;
