const singleNumber = require("./single-number");

describe("tests for leecode 136 - single number", () => {
  describe("should return correct result for different inputs", () => {
    it("Should return 1 for [1]", () => {
      let nums = [1];
      let expected = 1;
      let result = singleNumber(nums);
      expect(result).toBe(expected);
    });
    it("Should return 1 for [1, 2, 2]", () => {
      let nums = [1, 2, 2];
      let expected = 1;
      let result = singleNumber(nums);
      expect(result).toBe(expected);
    });
    it("Should return 2 for [0, 0, 1, 1, 2, 3, 3]", () => {
      let nums = [0, 0, 1, 1, 2, 3, 3];
      let expected = 2;
      let result = singleNumber(nums);
      expect(result).toBe(expected);
    });
    it("Should return 4 for [4, 1, 2, 1, 2]", () => {
      let nums = [4, 1, 2, 1, 2];
      let expected = 4;
      let result = singleNumber(nums);
      expect(result).toBe(expected);
    });
  });
});
