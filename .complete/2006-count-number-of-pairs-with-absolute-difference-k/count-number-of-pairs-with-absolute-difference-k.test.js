const countKDifference = require("./count-number-of-pairs-with-absolute-difference-k");

describe("tests for leecode 2006 - count number of pairs with absolute difference k", () => {
  describe("should return correct result for different inputs", () => {
    it("should return 4 for nums of [1,2,2,1] & k of 1", () => {
      let nums = [1, 2, 2, 1];
      let k = 1;
      let expected = 4;
      let result = countKDifference(nums, k);
      expect(result).toBe(expected);
    });
    it("should return 0 for nums of [1,3] & k of 3", () => {
      let nums = [1, 3];
      let k = 3;
      let expected = 0;
      let result = countKDifference(nums, k);
      expect(result).toBe(expected);
    });
    it("should return 3 for nums of [3,2,1,5,4] & k of 2", () => {
      let nums = [3, 2, 1, 5, 4];
      let k = 2;
      let expected = 3;
      let result = countKDifference(nums, k);
      expect(result).toBe(expected);
    });
  });
});
