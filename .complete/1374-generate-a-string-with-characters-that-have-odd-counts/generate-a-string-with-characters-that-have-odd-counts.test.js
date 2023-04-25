const generateTheString = require("./generate-a-string-with-characters-that-have-odd-counts");

describe("tests for leecode 1374 - generate a string with characters that have odd counts", () => {
  describe("should return correct result for different inputs", () => {
    it("should return 'aaaaa' when n is 5", () => {
      let n = 5;
      let expected = "aaaaa";
      let result = generateTheString(n);
      expect(result).toBe(expected);
    });
    it("should return 'aaab' when n is 4", () => {
      let n = 4;
      let expected = "aaab";
      let result = generateTheString(n);
      expect(result).toBe(expected);
    });
  });
});
