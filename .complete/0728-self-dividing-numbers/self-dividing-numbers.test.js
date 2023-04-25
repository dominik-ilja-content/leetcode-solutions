const selfDividingNumbers = require("./self-dividing-numbers");

describe("tests for leecode 728 - self dividing numbers", () => {
  describe("should return correct result for different inputs", () => {
    it("should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22] for 1 & 22", () => {
      let left = 1;
      let right = 22;
      let expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22];
      let result = selfDividingNumbers(left, right);
      expect(result).toEqual(expected);
    });
    it("should return [48, 55, 66, 77] for 47 & 85", () => {
      let left = 47;
      let right = 85;
      let expected = [48, 55, 66, 77];
      let result = selfDividingNumbers(left, right);
      expect(result).toEqual(expected);
    });
  });
});
