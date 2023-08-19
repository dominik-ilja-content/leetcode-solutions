const findErrorNums = require("./set-mismatch");

describe("tests for leecode 645 - set mismatch", () => {
  describe("should return correct result for different inputs", () => {
    it("Should return [2, 3] for [1, 2, 2, 4]", () => {
      let nums = [1, 2, 2, 4];
      let expected = [2, 3];
      let result = findErrorNums(nums);
      expect(result).toEqual(expected);
    });
    it("Should return [1, 2] for [1, 1]", () => {
      let nums = [1, 1];
      let expected = [1, 2];
      let result = findErrorNums(nums);
      expect(result).toEqual(expected);
    });
    it("Should return [2, 1] for [2, 2]", () => {
      let nums = [2, 2];
      let expected = [2, 1];
      let result = findErrorNums(nums);
      expect(result).toEqual(expected);
    });
    it("Should return [2, 1] for [3, 2, 2]", () => {
      let nums = [3, 2, 2];
      let expected = [2, 1];
      let result = findErrorNums(nums);
      expect(result).toEqual(expected);
    });
    it("Should return [3, 2] for [3, 3, 1]", () => {
      let nums = [3, 3, 1];
      let expected = [3, 2];
      let result = findErrorNums(nums);
      expect(result).toEqual(expected);
    });
  });
});
