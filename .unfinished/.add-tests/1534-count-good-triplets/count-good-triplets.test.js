const countGoodTriplets = require("./count-good-triplets");

describe("tests for leecode 1534 - count good triplets", () => {
  describe("should return correct result for different inputs", () => {
    it("", () => {
      let arr = [3, 0, 1, 1, 9, 7];
      let a = 7;
      let b = 2;
      let c = 3;
      let expected = 4;
      let result = countGoodTriplets(arr, a, b, c);
      expect(result).toBe(expected);
    });
    it("", () => {
      let arr = [1, 1, 2, 2, 3];
      let a = 0;
      let b = 0;
      let c = 1;
      let expected = 0;
      let result = countGoodTriplets(arr, a, b, c);
      expect(result).toBe(expected);
    });
  });
});
