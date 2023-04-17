/*
You are given a 0-indexed string word, consisting of lowercase English letters. You need to select one index and remove the letter at that index from word so that the frequency of every letter present in word is equal.

Return true if it is possible to remove one letter so that the frequency of all letters in word are equal, and false otherwise.

Note:

    The frequency of a letter x is the number of times it occurs in the string.
    You must remove exactly one letter and cannot chose to do nothing.

*/

/*
    Only one index can not be the same and it must only have a difference of one more character
    than the other letterFrequencies.

    how many differences are there?
    what is the degree of the difference?

    {
      1: 3,
      2: 5,
      3: 1,
      4: 2,
      6: 2,
      9: 1,
    }
    {
      1: 6,
      2: 1,
    }
    {
      3: 6,
      4: 1,
    }

    if the object has more than 2 keys it is false
    if the keys have a difference of more than one it is false
    if the value of the larger key is more than one it is false
*/

/**
 * @param {string} word
 * @return {boolean}
 */
var equalFrequency = function (word) {
  const letterFrequency = {};

  for (let i = 0; i < word.length; i++) {
    const letter = word[i];

    if (letterFrequency[letter] === undefined) {
      letterFrequency[letter] = 1;
    } else {
      letterFrequency[letter] += 1;
    }
  }

  if (Object.keys(letterFrequency).length === 1) {
    return true;
  }

  const countFrequency = {};

  for (let key in letterFrequency) {
    const count = letterFrequency[key];

    if (countFrequency[count] === undefined) {
      countFrequency[count] = 1;
    } else {
      countFrequency[count] += 1;
    }
  }

  const keys = Object.keys(countFrequency);

  if (keys.length === 1 && parseInt(keys[0]) === 1) {
    return true;
  }

  const hasOnlyTwoKeys = keys.length === 2;
  const keyDifferenceIsOne =
    Math.abs(parseInt(keys[0]) - parseInt(keys[1])) === 1;
  const smallerKeyValueIsOne = countFrequency[keys[0]] === 1;
  const largerKeyValueIsOne = countFrequency[keys[1]] === 1;

  return (
    hasOnlyTwoKeys &&
    keyDifferenceIsOne &&
    (smallerKeyValueIsOne || largerKeyValueIsOne)
  );
};

module.exports = equalFrequency;
