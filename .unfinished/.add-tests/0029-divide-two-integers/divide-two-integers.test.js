const divide = require("./divide-two-integers");

describe("tests for leetcode 29 - divide two integers", () => {
  test("works", () => {
    expect(divide(10, 5)).toBe(2);
    expect(divide(10, 3)).toBe(3);
    expect(divide(-2147483648, -1)).toBe(2147483647);
    // expect(divide(2147483647, 2)).toBe(2147483647);
  });
});
