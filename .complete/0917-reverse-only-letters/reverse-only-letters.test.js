const reverseOnlyLetters = require("./reverse-only-letters");
// const {} = require("../../data_structures/");

/*
    1 <= s.length <= 100
    s consists of characters with ASCII values in the range [33, 122].
    s does not contain '\"' or '\\'.
*/

describe("tests for leecode 917 - reverse only letters", () => {
  it("should work on strings with only lowercase letters", () => {
    let str = "abc";
    let expected = "cba";
    let result = reverseOnlyLetters(str);
    expect(result).toBe(expected);
  });
  it("should work on strings with only uppercase letters", () => {
    let str = "ABC";
    let expected = "CBA";
    let result = reverseOnlyLetters(str);
    expect(result).toBe(expected);
  });
  it("should work on strings with only non-letter characters", () => {
    let str = "!#$%&'()*+,-./0123456789:;<=>?@[]^_`";
    let expected = "!#$%&'()*+,-./0123456789:;<=>?@[]^_`";
    let result = reverseOnlyLetters(str);
    expect(result).toBe(expected);
  });
  it("should work on strings with some non-letter characters", () => {
    let str = "Test1ng-Leet=code-Q!";
    let expected = "Qedo1ct-eeLg=ntse-T!";
    let result = reverseOnlyLetters(str);
    expect(result).toBe(expected);

    str = "7_28]";
    expected = "7_28]";
    result = reverseOnlyLetters(str);
    expect(result).toBe(expected);
  });
});
