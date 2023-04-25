const permute = require("./permutations");

describe("tests for leecode 46 - permutations", () => {
  describe("should return correct result for different inputs", () => {
    it("should return [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]] for [1, 2, 3]", () => {
      let nums = [1, 2, 3];
      let expected = [
        [1, 2, 3],
        [1, 3, 2],
        [2, 1, 3],
        [2, 3, 1],
        [3, 1, 2],
        [3, 2, 1],
      ];
      let result = permute(nums);
      expect(result).toEqual(expected);
    });
    it("should return [[0,1],[1,0]] for [0, 1]", () => {
      let nums = [0, 1];
      let expected = [
        [0, 1],
        [1, 0],
      ];
      let result = permute(nums);
      expect(result).toEqual(expected);
    });
    it("should return [[1]] for [1]", () => {
      let nums = [1];
      let expected = [[1]];
      let result = permute(nums);
      expect(result).toEqual(expected);
    });
  });
});
