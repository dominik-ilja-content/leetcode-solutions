const searchRange = require("./find-first-and-last-position-of-element-in-sorted-array");

describe("tests for leecode 0034 - find first and last position of element in sorted array", () => {
  describe("should return [-1, -1] when the target isn't found in the array", () => {
    const expected = [-1, -1];

    test("empty array is passed", () => {
      let nums = [];
      let result = searchRange(nums, 0);
      expect(result).toEqual(expected);
    });
    test("target doesn't exisit in array", () => {
      let nums = [1, 1, 2, 2, 3];
      let result = searchRange(nums, 0);
      expect(result).toEqual(expected);
    });
  });
  describe("should return correct index pairs when target value exists", () => {
    describe("should work when a single target value is in the array", () => {
      test("target is at the beginning of the array", () => {
        let nums = [0, 1, 1, 2];
        let expected = [0, 0];
        let result = searchRange(nums, 0);
        expect(result).toEqual(expected);
      });
      test("target is in middle of the array", () => {
        let nums = [0, 1, 2];
        let expected = [1, 1];
        let result = searchRange(nums, 1);
        expect(result).toEqual(expected);
      });
      test("target is at the end of the array", () => {
        let nums = [0, 1, 1, 2];
        let expected = [3, 3];
        let result = searchRange(nums, 2);
        expect(result).toEqual(expected);
      });
    });
    describe("should work when there are multiple target values in the array", () => {
      test("target range is at the beginning of the array", () => {
        let nums = [0, 0, 0, 0, 1, 1, 2];
        let expected = [0, 3];
        let result = searchRange(nums, 0);
        expect(result).toEqual(expected);
      });
      test("target range is in middle of the array", () => {
        let nums = [0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 4, 5, 6];
        let expected = [4, 6];
        let result = searchRange(nums, 1);
        expect(result).toEqual(expected);
      });
      test("target range is at the end of the array", () => {
        let nums = [0, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2];
        let expected = [3, 10];
        let result = searchRange(nums, 2);
        expect(result).toEqual(expected);
      });
    });
  });
});
