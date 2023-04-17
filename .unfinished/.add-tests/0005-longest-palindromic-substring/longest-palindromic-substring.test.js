const longestPalindrome = require("./longest-palindromic-substring");

describe("tests for leecode 5 - longest palindromic substring", () => {
  describe("should return correct palindrome strings", () => {
    it("should return either 'bab' or 'aba' for 'babad'", () => {
      let s = "babad";
      let expected = ["bab", "aba"];
      let result = longestPalindrome(s);
      expect(result).toBeOneOf(expected);
    });
  });
});
