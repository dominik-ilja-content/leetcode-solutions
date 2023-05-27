const twoSum = require("./0167-two-sum-ii-input-array-is-sorted");

describe("tests for leecode 167 - two sum ii input array is sorted", () => {
  describe("should return correct result for different inputs", () => {
    it("should return [0, 1] for [2, 7, 11, 15] & 9", () => {
      let nums = [2, 7, 11, 15];
      let target = 9;
      let expected = [
        [0, 1],
        [1, 0],
      ];
      let result = twoSum(nums, target);
      expect(result).toBeOneOf(expected);
    });
    it("should return [1, 3] for [2, 7, 11, 15] & 22", () => {
      let nums = [2, 7, 11, 15];
      let target = 22;
      let expected = [
        [1, 3],
        [3, 1],
      ];
      let result = twoSum(nums, target);
      expect(result).toBeOneOf(expected);
    });
    it("should return [2, 4] for [3, 4, 7, 9, 12] & 19", () => {
      let nums = [3, 4, 7, 9, 12];
      let target = 19;
      let expected = [
        [2, 4],
        [4, 2],
      ];
      let result = twoSum(nums, target);
      expect(result).toBeOneOf(expected);
    });
    it("should return [2, 5] for [1, 2, 3, 4, 4, 9, 56, 90] & 8", () => {
      let nums = [1, 2, 3, 4, 4, 9, 56, 90];
      let target = 8;
      let expected = [
        [3, 4],
        [4, 3],
      ];
      let result = twoSum(nums, target);
      expect(result).toBeOneOf(expected);
    });
    it("should return [2, 5] for [3, 24, 50, 79, 88, 150, 345, 500] & 200", () => {
      let nums = [3, 24, 50, 79, 88, 150, 345, 500];
      let target = 200;
      let expected = [
        [2, 5],
        [5, 2],
      ];
      let result = twoSum(nums, target);
      expect(result).toBeOneOf(expected);
    });
    it("should return [23, 31] for [12, 13, 23, 28, 43, 44, 59, 60, 61, 68, 70, 86, 88, 92, 124, 125, 136, 168, 173, 173, 180, 199, 212, 221, 227, 230, 277, 282, 306, 314, 316, 321, 325, 328, 336, 337, 363, 365, 368, 370, 370, 371, 375, 384, 387, 394, 400, 404, 414, 422, 422, 427, 430, 435, 457, 493, 506, 527, 531, 538, 541, 546, 568, 583, 585, 587, 650, 652, 677, 691, 730, 737, 740, 751, 755, 764, 778, 783, 785, 789, 794, 803, 809, 815, 847, 858, 863, 863, 874, 887, 896, 916, 920, 926, 927, 930, 933, 957, 981, 997] & 542", () => {
      let nums = [
        12, 13, 23, 28, 43, 44, 59, 60, 61, 68, 70, 86, 88, 92, 124, 125, 136,
        168, 173, 173, 180, 199, 212, 221, 227, 230, 277, 282, 306, 314, 316,
        321, 325, 328, 336, 337, 363, 365, 368, 370, 370, 371, 375, 384, 387,
        394, 400, 404, 414, 422, 422, 427, 430, 435, 457, 493, 506, 527, 531,
        538, 541, 546, 568, 583, 585, 587, 650, 652, 677, 691, 730, 737, 740,
        751, 755, 764, 778, 783, 785, 789, 794, 803, 809, 815, 847, 858, 863,
        863, 874, 887, 896, 916, 920, 926, 927, 930, 933, 957, 981, 997,
      ];
      let target = 542;
      let expected = [
        [23, 31],
        [31, 23],
      ];
      let result = twoSum(nums, target);
      expect(result).toBeOneOf(expected);
    });
  });
});
