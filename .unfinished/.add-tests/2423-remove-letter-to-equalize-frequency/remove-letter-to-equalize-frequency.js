function getFrequency(iterable) {
  const freq = {};

  for (let i = 0; i < iterable.length; i++) {
    const val = iterable[i];

    if (freq[val] !== undefined) {
      freq[val] += 1;
    } else {
      freq[val] = 1;
    }
  }

  return freq;
}

/**
 * @param {string} word
 * @return {boolean}
 */
var equalFrequency = function (word) {
  const letterFrequency = getFrequency(word);
  const countFrequency = getFrequency(Object.values(letterFrequency));
  const keys = Object.keys(countFrequency);

  if (keys.length > 2) {
    return false;
  }

  if (keys.length === 2) {
    // the group of a single character would be removed entirely
    // leaving the larger group equal to itself
    if (keys[0] === "1" && countFrequency[keys[0]] === 1) {
      return true;
    }
    // strings are turned into ascii values when subtracted
    // we should get the same result as if we parsed them to integers
    // if the key difference is not equal to one removing a single
    // character from either group wouldn't result in an equal amount
    if (Math.abs(keys[0] - keys[1]) !== 1) {
      return false;
    }
    // if the larger key has a value of one return true
    // because the larger character group would become a part
    // of the smaller character group
    if (
      (keys[0] - keys[1] === 1 && countFrequency[keys[0]] === 1) ||
      (keys[1] - keys[0] === 1 && countFrequency[keys[1]] === 1)
    ) {
      return true;
    }

    return false;
  }

  // if the group is "1" removing a character will not create a new grouping
  // if the grouping has a value of 1 removing a character will move the grouping
  // down by one {3:1} => {2:1} which is still equal
  if (keys[0] === "1" || countFrequency[keys[0]] === 1) {
    return true;
  }

  // the above cases failed and that means we cannot make all letter groups equal
  return false;
};

//

/*
    so we need to know how many of the same letter occurrs
    "ddaccb" => {d: 2, a: 1, c: 2, b: 1}

    we then get the frequencies of the values we captured
    {d: 2, a: 1, c: 2, b: 1} => {2: 2, 1: 2}

    if there are more than 2 keys we will return false because
    if we even out one of the keys there'll be another one out of balance
    Example: {1: 1, 2: 1, 3: 1} => {2: 2, 3: 2} not in balance!

    if there is one key and the key is 1 we will return true because that will keep it in balance
    else if the key is greater than 1, but has a value of one we can return true
    else we'll return false because that'll ruin the balance
    Example {1: 2} => {1: 1} AND {2:2} => {1:1, 2:1} AND {3:1} => {2:1}
    // object will not be updated, but this is what it'd look like

    if there is two keys we need to look to see if a key has a value of one
    if there is a key with a value of one we can return true because removing that key
    will keep the balance of the other key
    {1:1, 2:1} => {2:1} BALANCED!
    else if there isn't a key with a value of one return false because we won't be able to balance it
    {1:2, 2:2} => {1:1, 2:2} NOT BALANCED!
*/
