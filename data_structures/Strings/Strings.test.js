const generateRandomString = require("./Strings");

const a_CHAR_CODE = "a".charCodeAt(0);
const z_CHAR_CODE = "z".charCodeAt(0);
const A_CHAR_CODE = "A".charCodeAt(0);
const Z_CHAR_CODE = "Z".charCodeAt(0);

function checkCharacters(str, minCharCode, maxCharCode) {
  for (let i = 0; i < str.length; i++) {
    expect(str[i].charCodeAt(0)).toBeWithin(minCharCode, maxCharCode + 1);
  }
}

describe("tests for string data structure", () => {
  describe("tests for generating random string", () => {
    test("should generate a lowercase letter between 'a' and 'z'", () => {
      const result = generateRandomString(1);
      checkCharacters(result, a_CHAR_CODE, z_CHAR_CODE);
    });
    test("should generate multiple lowercase letters between 'a' and 'z'", () => {
      const result = generateRandomString(100);
      checkCharacters(result, a_CHAR_CODE, z_CHAR_CODE);
    });
    test("should generate multiple uppercase letters between 'A' and 'Z'", () => {
      const result = generateRandomString(100, "upper");
      checkCharacters(result, A_CHAR_CODE, Z_CHAR_CODE);
    });
    test("first letter should be uppercase and remaining letters should be lowercase", () => {
      let result = generateRandomString(1, "title");
      checkCharacters(result, A_CHAR_CODE, Z_CHAR_CODE);

      result = generateRandomString(100, "title");
      checkCharacters(result[0], A_CHAR_CODE, Z_CHAR_CODE);
      checkCharacters(result.slice(1), a_CHAR_CODE, z_CHAR_CODE);
    });
  });
});
