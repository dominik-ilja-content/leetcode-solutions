const findArray = require("./find-the-original-array-of-prefix-xor");

describe("tests for leecode 2433 - find the original array of prefix xor", () => {
  describe("should return correct results for different inputs", () => {
    it("should return [5,7,2,3,2] for [5,2,0,3,1]", () => {
      let prefix = [5, 2, 0, 3, 1];
      let expected = [5, 7, 2, 3, 2];
      let result = findArray(prefix);
      expect(result).toEqual(expected);
    });
    it("should return [13] for [13]", () => {
      let prefix = [13];
      let expected = [13];
      let result = findArray(prefix);
      expect(result).toEqual(expected);
    });
  });
});
