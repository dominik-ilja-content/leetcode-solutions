const sumOddLengthSubarrays = require("./sum-of-all-odd-length-subarrays");

/*
    1 <= arr.length <= 100;
    1 <= arr[i] <= 1000;
*/

describe("tests for leetcode 1588 - Sum of All Odd Length Subarrays", () => {
  test("should work for arrays of length 1", () => {
    expect(sumOddLengthSubarrays([1])).toBe(1);
    expect(sumOddLengthSubarrays([10])).toBe(10);
    expect(sumOddLengthSubarrays([100])).toBe(100);
    expect(sumOddLengthSubarrays([1000])).toBe(1000);
  });
  test("should work for arrays of length 2", () => {
    expect(sumOddLengthSubarrays([1, 1])).toBe(2);
    expect(sumOddLengthSubarrays([10, 10])).toBe(20);
    expect(sumOddLengthSubarrays([100, 100])).toBe(200);
    expect(sumOddLengthSubarrays([1000, 1000])).toBe(2000);
  });
  test("should work for arrays of length 3", () => {
    expect(sumOddLengthSubarrays([1, 1, 1])).toBe(6);
    expect(sumOddLengthSubarrays([10, 10, 10])).toBe(60);
    expect(sumOddLengthSubarrays([100, 100, 100])).toBe(600);
    expect(sumOddLengthSubarrays([1000, 1000, 1000])).toBe(6000);
  });
  test("should work for arrays of length 4", () => {
    expect(sumOddLengthSubarrays([1, 1, 1, 1])).toBe(10);
    expect(sumOddLengthSubarrays([10, 10, 10, 10])).toBe(100);
    expect(sumOddLengthSubarrays([100, 100, 100, 100])).toBe(1000);
    expect(sumOddLengthSubarrays([1000, 1000, 1000, 1000])).toBe(10000);
  });
  test("should work for arrays of length 5", () => {
    expect(sumOddLengthSubarrays([1, 1, 1, 1, 1])).toBe(19);
    expect(sumOddLengthSubarrays([10, 10, 10, 10, 10])).toBe(190);
    expect(sumOddLengthSubarrays([100, 100, 100, 100, 100])).toBe(1900);
    expect(sumOddLengthSubarrays([1000, 1000, 1000, 1000, 1000])).toBe(19000);
  });
  test("should work for arrays of length up to 100", () => {
    const arr = [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    ];
    expect(sumOddLengthSubarrays(arr)).toBe(85850);
  });
});
