/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function (coordinates) {
  const codeForA = "a".charCodeAt(0); // used to make other chars 0 indexed
  const codeForOne = "1".charCodeAt(0); // used to make numbers 0 indexed
  const row = coordinates[0].charCodeAt(0) - codeForA;
  const col = coordinates[1].charCodeAt(0) - codeForOne;
  const rowIsEven = row % 2 === 0;
  const colIsEven = col % 2 === 0;

  return (rowIsEven && !colIsEven) || (!rowIsEven && colIsEven);
};

console.log(squareIsWhite("a1")); // false
console.log(squareIsWhite("h3")); // true
console.log(squareIsWhite("c7")); // false

/*
    "a1" a = 0, 1 = 1 - 1 = 0
    if a row is even

    [true, false, true, false, true, false, true, false]
    [false, true, false, true, false, true, false, true]
*/

module.exports = squareIsWhite;
