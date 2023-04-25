const mergeAlternately = require("./merge-strings-alternately");

describe("tests for leecode 1768 - merge strings alternately", () => {
  describe("should return correct result for different inputs", () => {
    it("should return 'apbqcr' when word1 is 'abc' and word2 is 'pqr'", () => {
      let word1 = "abc";
      let word2 = "pqr";
      let expected = "apbqcr";
      let result = mergeAlternately(word1, word2);
      expect(result).toBe(expected);
    });
    it("should return 'apbqrs' when word1 is 'ab' and word2 is 'pqrs'", () => {
      let word1 = "ab";
      let word2 = "pqrs";
      let expected = "apbqrs";
      let result = mergeAlternately(word1, word2);
      expect(result).toBe(expected);
    });
    it("should return 'apbqrs' when word1 is 'abcd' and word2 is 'pq'", () => {
      let word1 = "abcd";
      let word2 = "pq";
      let expected = "apbqcd";
      let result = mergeAlternately(word1, word2);
      expect(result).toBe(expected);
    });
    it("should return 'apbqrs' when word1 is 'cf' and word2 is 'eee'", () => {
      let word1 = "cf";
      let word2 = "eee";
      let expected = "cefee";
      let result = mergeAlternately(word1, word2);
      expect(result).toBe(expected);
    });
  });
});
