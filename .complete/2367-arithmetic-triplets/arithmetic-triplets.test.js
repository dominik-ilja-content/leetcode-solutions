const arithmeticTriplets = require("./arithmetic-triplets");

describe("tests for leecode 2367 - arithmetic triplets", () => {
  describe("should return correct result for different inputs", () => {
    it("should return 2 for nums of [0, 1, 4, 6, 7, 10] and diff of 3", () => {
      let nums = [0, 1, 4, 6, 7, 10];
      let diff = 3;
      let expected = 2;
      let result = arithmeticTriplets(nums, diff);
      expect(result).toBe(expected);
    });
    it("should return 2 for nums of [4, 5, 6, 7, 8, 9] and diff of 2", () => {
      let nums = [4, 5, 6, 7, 8, 9];
      let diff = 2;
      let expected = 2;
      let result = arithmeticTriplets(nums, diff);
      expect(result).toBe(expected);
    });
  });
});
