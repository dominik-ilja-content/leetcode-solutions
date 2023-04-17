const majorityElement = require("./majority-element");

describe("tests for leetcode 169 - majority element", () => {
  test("should work on singe item arrays", () => {
    expect(majorityElement([1])).toBe(1);
  });
  test("should work on three item arrays", () => {
    expect(majorityElement([1, 2, 1])).toBe(1);
  });
  test("should work on four item arrays", () => {
    expect(majorityElement([1, 2, 1, 1])).toBe(1);
  });
  test("should work on five item arrays", () => {
    expect(majorityElement([1, 2, 2, 1, 1])).toBe(1);
  });
  test("should work on six item arrays", () => {
    expect(majorityElement([1, 2, 2, 1, 1, 1])).toBe(1);
  });
  test("should work on seven item arrays", () => {
    expect(majorityElement([2, 1, 2, 2, 1, 1, 1])).toBe(1);
  });
});
