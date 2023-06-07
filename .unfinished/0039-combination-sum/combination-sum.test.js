const combinationSum = require("./combination-sum");

describe("tests for leecode 39 - combination sum", () => {
  describe("should return correct result for different inputs", () => {
    it("test 1", () => {
      let candidates = [2, 3, 6, 7];
      let target = 7;
      let expected = [[2, 2, 3], [7]];
      let result = combinationSum(candidates, target);
      expect(result).toEqual(expected);
    });
    it("test 2", () => {
      let candidates = [2, 3, 5];
      let target = 8;
      let expected = [
        [2, 2, 2, 2],
        [2, 3, 3],
        [3, 5],
      ];
      let result = combinationSum(candidates, target);
      expect(result).toEqual(expected);
    });
    it("test 3", () => {
      let candidates = [2];
      let target = 1;
      let expected = [];
      let result = combinationSum(candidates, target);
      expect(result).toEqual(expected);
    });
    it("test 4", () => {
      let candidates = [4, 2];
      let target = 8;
      let expected = [
        [2, 2, 2, 2],
        [2, 2, 4],
        [4, 4],
      ];
      let result = combinationSum(candidates, target);
      expect(result).toEqual(expected);
    });
    it("test 5", () => {
      let candidates = [4, 2, 5];
      let target = 20;
      let expected = [
        [4, 4, 4, 4, 4],
        [4, 4, 4, 4, 2, 2],
        [4, 4, 4, 2, 2, 2, 2],
        [4, 4, 2, 2, 2, 2, 2, 2],
        [4, 4, 2, 5, 5],
        [4, 2, 2, 2, 2, 2, 2, 2, 2],
        [4, 2, 2, 2, 5, 5],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 5, 5],
        [5, 5, 5, 5],
      ];
      let result = combinationSum(candidates, target);
      expect(result).toEqual(expected);
    });
  });
});
