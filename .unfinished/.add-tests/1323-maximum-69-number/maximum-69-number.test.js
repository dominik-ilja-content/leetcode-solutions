const maximum69Number = require("./maximum-69-number");

describe("tests for leecode 1323 - maximum 69 Number", () => {
  describe("should return correct result for different inputs", () => {
    it("", () => {
      let num = 9669;
      let expected = 9969;
      let result = maximum69Number(num);
      expect(result).toBe(expected);
    });
    it("", () => {
      let num = 9996;
      let expected = 9999;
      let result = maximum69Number(num);
      expect(result).toBe(expected);
    });
    it("", () => {
      let num = 9999;
      let expected = 9999;
      let result = maximum69Number(num);
      expect(result).toBe(expected);
    });
  });
});
