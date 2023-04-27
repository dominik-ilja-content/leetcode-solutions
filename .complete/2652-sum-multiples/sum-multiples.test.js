const sumOfMultiples = require("./sum-multiples");

describe("tests for leecode 2652 - sum multiples", () => {
  describe("should return correct result for different inputs", () => {
    it("should return 21 when n is 7", () => {
      let n = 7;
      let expected = 21;
      let result = sumOfMultiples(n);
      expect(result).toBe(expected);
    });
    it("should return 40 when n is 10", () => {
      let n = 10;
      let expected = 40;
      let result = sumOfMultiples(n);
      expect(result).toBe(expected);
    });
    it("should return 30 when n is 9", () => {
      let n = 9;
      let expected = 30;
      let result = sumOfMultiples(n);
      expect(result).toBe(expected);
    });
  });
});
