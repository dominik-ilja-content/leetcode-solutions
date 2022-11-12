/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */

/*
    key = "eljuxhpwnyrdgtqkviszcfmabo", message = "zwx hnfx lqantp mnoeius ycgk vcnjrdb"

    the cipher key
    map : {
        e: "a",
        l: "b",
        j: "c",
        u: "d"
    }
*/

var decodeMessage = function (key, message) {
  const map = {};
  let charCode = "a".charCodeAt(0);

  // create the cipher key
  for (let i = 0; i < key.length; i++) {
    const char = key[i];

    if (map[char] === undefined && char !== " ") {
      map[char] = String.fromCharCode(charCode);
      charCode += 1;
    }
  }

  // decode the message
  let output = "";
  for (let i = 0; i < message.length; i++) {
    const char = message[i];

    output += char === " " ? char : map[char];
  }

  return output;
};

// console.log(
//   decodeMessage(
//     "the quick brown fox jumps over the lazy dog",
//     "vkbs bs t suepuv"
//   )
// ); // "this is a secret"

// console.log(
//   decodeMessage(
//     "eljuxhpwnyrdgtqkviszcfmabo",
//     "zwx hnfx lqantp mnoeius ycgk vcnjrdb"
//   )
// ); // "the five boxing wizards jump quickly"
