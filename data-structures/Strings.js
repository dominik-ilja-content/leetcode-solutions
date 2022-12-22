import { generateRandomNumber } from "./Helpers";

/**
 * @param {number} length
 * @param {("lower"|"upper"|"title")} char_case
 * @returns {string}
 * @desc Creates a string of randomly generated latin characters
 */

function generateRandomString(length, char_case = "lower") {
  if (length <= 0) return "";

  const a_char_code = "a".charCodeAt(0);
  const z_char_code = "z".charCodeAt(0);
  let output = "";

  for (let i = 0; i < length; i++) {
    output += String.fromCharCode(
      generateRandomNumber(a_char_code, z_char_code, { round: true, place: 0 })
    );
  }

  switch (char_case) {
    case "upper":
      output = output.toUpperCase();
      break;
    case "title":
      output = output[0].toUpperCase() + output.slice(1);
      break;
  }

  return output;
}

module.exports = {
  generateRandomString,
};
