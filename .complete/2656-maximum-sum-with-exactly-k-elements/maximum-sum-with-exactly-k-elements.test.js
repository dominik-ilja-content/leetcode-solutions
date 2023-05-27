const maximizeSum = require("./maximum-sum-with-exactly-k-elements");

describe("tests for leecode 0000 - name", () => {
  describe("should return correct result for different inputs", () => {
    it("should return 18 for [1, 2, 3, 4, 5] & 3", () => {
      let nums = [1, 2, 3, 4, 5];
      let k = 3;
      let expected = 18;
      let result = maximizeSum(nums, k);
      expect(result).toBe(expected);
    });
    it("should return 11 for [5, 5, 5] & 2", () => {
      let nums = [5, 5, 5];
      let k = 2;
      let expected = 11;
      let result = maximizeSum(nums, k);
      expect(result).toBe(expected);
    });
  });
});
