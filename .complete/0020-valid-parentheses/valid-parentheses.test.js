const isValid = require("./valid-parentheses");

describe("tests for leecode 20 - valid parenteses", () => {
  describe("should return correct result for different inputs", () => {
    it("Should return true for ()", () => {
      let s = "()";
      let expected = true;
      let result = isValid(s);
      expect(result).toBe(expected);
    });
    it("Should return true for ()[{{}}[]]()", () => {
      let s = "()[{{}}[]]()";
      let expected = true;
      let result = isValid(s);
      expect(result).toBe(expected);
    });
    it("Should return false for (]", () => {
      let s = "(]";
      let expected = false;
      let result = isValid(s);
      expect(result).toBe(expected);
    });
  });
});
