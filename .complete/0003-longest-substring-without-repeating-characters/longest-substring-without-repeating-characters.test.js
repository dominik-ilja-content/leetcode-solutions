const lengthOfLongestSubstring = require("./longest-substring-without-repeating-characters");

describe("tests for leecode 3 - longest substring without repeating characters", () => {
  it("should return zero for an empty string", () => {
    let str = "";
    let expected = 0;
    let result = lengthOfLongestSubstring(str);
    expect(result).toBe(expected);
  });
  it("should return one for a string with one character", () => {
    let str = "a";
    let expected = 1;
    let result = lengthOfLongestSubstring(str);
    expect(result).toBe(expected);
  });
  describe("should return length of string if no characters repeat", () => {
    it("should return 26 for 'abcdefghijklmnopqrstuvwxyz'", () => {
      let str = "abcdefghijklmnopqrstuvwxyz";
      let expected = 26;
      let result = lengthOfLongestSubstring(str);
      expect(result).toBe(expected);
    });
    it("should return 6 for 'harold'", () => {
      let str = "harold";
      let expected = 6;
      let result = lengthOfLongestSubstring(str);
      expect(result).toBe(expected);
    });
  });
  describe("should return length of longest substring", () => {
    it("should return 3 for 'abc'", () => {
      let str = "abc";
      let expected = 3;
      let result = lengthOfLongestSubstring(str);
      expect(result).toBe(expected);
    });
    it("should return 3 for 'abcabcbb'", () => {
      let str = "abcabcbb";
      let expected = 3;
      let result = lengthOfLongestSubstring(str);
      expect(result).toBe(expected);
    });
    it("should return 1 for 'bbbbb'", () => {
      let str = "abcabcbb";
      let expected = 3;
      let result = lengthOfLongestSubstring(str);
      expect(result).toBe(expected);
    });
    it("should return 3 for 'pwwkew'", () => {
      let str = "pwwkew";
      let expected = 3;
      let result = lengthOfLongestSubstring(str);
      expect(result).toBe(expected);
    });
    it("should return 2 for 'abba'", () => {
      let str = "abba";
      let expected = 2;
      let result = lengthOfLongestSubstring(str);
      expect(result).toBe(expected);
    });
  });
});
