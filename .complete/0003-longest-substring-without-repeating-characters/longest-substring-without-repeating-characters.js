/* Hash Map & Sliding Window - For Loop */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) return s.length;

  const characterIndexMap = new Map();
  let longestSubstringLength = -Infinity;

  for (let right = 0, left = 0; right < s.length; right++) {
    const character = s[right];

    if (characterIndexMap.has(character)) {
      const previousCharacterIndex = characterIndexMap.get(character);

      if (previousCharacterIndex >= left) {
        left = previousCharacterIndex + 1;
      }
    }

    characterIndexMap.set(character, right);
    const currentSubstringLength = right - left + 1;

    if (currentSubstringLength > longestSubstringLength) {
      longestSubstringLength = currentSubstringLength;
    }
  }

  return longestSubstringLength;
};

/* Hash Map & Sliding Window - While Loop*/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) return s.length;

  const characterMap = new Map();
  let longestSubstringLength = -Infinity;
  let left = 0;
  let right = 0;

  while (right < s.length) {
    const char = s[right];

    if (characterMap.has(char)) {
      const prevCharacterIndex = characterMap.get(char);

      if (prevCharacterIndex >= left) {
        left = prevCharacterIndex + 1;
      }
    }

    characterMap.set(char, right);
    const currSubstringLength = right - left + 1;

    if (currSubstringLength > longestSubstringLength) {
      longestSubstringLength = currSubstringLength;
    }

    right += 1;
  }

  return longestSubstringLength;
};

/* Brute Force - Substring */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let longestLength = 0;

  for (let i = 0; i < s.length; i++) {
    let subString = "";

    for (let j = i; j < s.length; j++) {
      const letter = s[j];
      const hasLetter = subString.includes(letter);

      if (hasLetter) {
        break;
      } else {
        subString += letter;
        if (subString.length > longestLength) {
          longestLength = subString.length;
        }
      }
    }
  }

  return longestLength;
};

/* Brute Force - Early Break - No built in Methods */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let longestLength = 0;

  for (let i = 0; i < s.length; i++) {
    let hasDuplicates = false;

    for (let j = i; j < s.length; j++) {
      const letter = s[j];

      for (let k = i; k < j; k++) {
        if (s[k] === letter) {
          hasDuplicates = true;
          break;
        }
      }

      if (hasDuplicates) {
        break;
      } else {
        const length = j - i + 1;
        if (length > longestLength) {
          longestLength = length;
        }
      }
    }

    if (!hasDuplicates) {
      break;
    }
  }

  return longestLength;
};

/* Brute Force - Substring - Early Break */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let longestLength = 0;

  for (let i = 0; i < s.length; i++) {
    let subString = "";
    let hasDuplicates = false;

    for (let j = i; j < s.length; j++) {
      const letter = s[j];
      hasDuplicates = subString.includes(letter);

      if (hasDuplicates) {
        break;
      } else {
        subString += letter;
        if (subString.length > longestLength) {
          longestLength = subString.length;
        }
      }
    }

    if (!hasDuplicates) {
      break;
    }
  }

  return longestLength;
};

/* Brute Force - Hash Map - Optimizations */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let longestLength = 0;

  for (let i = 0; i < s.length; i++) {
    let letterMap = {};
    let hasDuplicates = false;

    for (let j = i; j < s.length; j++) {
      const letter = s[j];

      if (letterMap[letter] === undefined) {
        letterMap[letter] = true;
      } else {
        hasDuplicates = true;
        break;
      }

      const length = j - i + 1;
      if (length > longestLength) {
        longestLength = length;
      }
    }

    if (!hasDuplicates) {
      break;
    }
  }

  return longestLength;
};

module.exports = lengthOfLongestSubstring;
