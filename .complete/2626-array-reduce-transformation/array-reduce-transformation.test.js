const reduce = require("./array-reduce-transformation");

describe("tests for leecode 2626 - array reduce transformation", () => {
  describe("should return correct result for different inputs", () => {
    it("should return 10", () => {
      let nums = [1, 2, 3, 4];
      let fn = (acc, curr) => acc + curr;
      let init = 0;
      let expected = 10;
      let result = reduce(nums, fn, init);
      expect(result).toBe(expected);
    });
    it("should return 130", () => {
      let nums = [1, 2, 3, 4];
      let fn = (acc, curr) => acc + curr * curr;
      let init = 100;
      let expected = 130;
      let result = reduce(nums, fn, init);
      expect(result).toBe(expected);
    });
    it("should return 25", () => {
      let nums = [];
      let fn = (acc, curr) => 0;
      let init = 25;
      let expected = 25;
      let result = reduce(nums, fn, init);
      expect(result).toBe(expected);
    });
  });
});
