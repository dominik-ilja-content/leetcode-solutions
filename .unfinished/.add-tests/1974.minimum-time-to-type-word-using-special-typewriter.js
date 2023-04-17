/**
 * @param {string} word
 * @return {number}
 */
var minTimeToType = function (word) {
  let output = '', pointer = 'a', seconds = 1, letters = 25;


  for (let i = 0; i < word.length; i++) {
    const char = word[i];

    do {

      if (pointer === char) {
        output += 1;
        seconds += 1;
      }


    } while (pointer !== char);
  }

  return output;
};
