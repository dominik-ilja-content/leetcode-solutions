const search = require("./binary-search");

describe("tests for leecode 704 - binary search", () => {
  it("should return the index if the target is found", () => {
    let nums = [-1, 0, 3, 5, 9, 12];
    let target = 9;
    let expected = 4;
    let result = search(nums, target);
    expect(result).toBe(expected);
  });
  it("should return -1 if target isn't found", () => {
    let nums = [-1, 0, 3, 5, 9, 12];
    let target = 2;
    let expected = -1;
    let result = search(nums, target);
    expect(result).toBe(expected);
  });
});
