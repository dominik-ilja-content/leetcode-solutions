const longestPalindrome = require("./longest-palindromic-substring");

describe("tests for leecode 5 - longest palindromic substring", () => {
  describe("should return correct palindrome strings", () => {
    it("should return 'c' for 'c'", () => {
      let s = "c";
      let expected = "c";
      let result = longestPalindrome(s);
      expect(result).toBe(expected);
    });
    it("should return either 'bab' or 'aba' for 'babad'", () => {
      let s = "babad";
      let expected = ["bab", "aba"];
      let result = longestPalindrome(s);
      expect(result).toBeOneOf(expected);
    });
    it("should return 'bb' for 'abbd'", () => {
      let s = "abbd";
      let expected = "bb";
      let result = longestPalindrome(s);
      expect(result).toBe(expected);
    });
    it("should return 'cc' for 'abcdefgcc'", () => {
      let s = "abcdefgcc";
      let expected = "cc";
      let result = longestPalindrome(s);
      expect(result).toBe(expected);
    });
    it("should return 'aba' for 'abacdefgcc'", () => {
      let s = "abacdefgcc";
      let expected = "aba";
      let result = longestPalindrome(s);
      expect(result).toBe(expected);
    });
  });
});
