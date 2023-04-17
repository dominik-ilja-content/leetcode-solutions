const containsDuplicate = require("./contains-duplicates");

describe("tests for leecode 217 - contains duplicates", () => {
  it("should return true if duplicate is found", () => {
    let nums = [1, 2, 3];
    let expected = true;
    let result = containsDuplicate(nums);
    expect(result).toBe(expected);
  });
  it("should return false if duplicate is not found", () => {
    let nums = [1, 2, 3, 1];
    let expected = false;
    let result = containsDuplicate(nums);
    expect(result).toBe(expected);
  });
});
