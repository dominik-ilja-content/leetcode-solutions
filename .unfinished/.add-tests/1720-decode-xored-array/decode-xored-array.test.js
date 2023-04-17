const decode = require("./decode-xored-array");

describe("test for leetcode 1720 - decode xored array", () => {
  test("works", () => {
    expect(decode([1, 2, 3], 1)).toEqual([1, 0, 2, 1]);
    expect(decode([6, 2, 7, 3], 4)).toEqual([4, 2, 0, 7, 4]);
  });
});
