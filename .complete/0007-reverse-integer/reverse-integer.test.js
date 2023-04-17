const reverse = require("./reverse-integer");

describe("tests for leecode 7 - reverse integer", () => {
  it("should return zero if x is zero", () => {
    expect(reverse(0)).toBe(0);
  });
  it("should return zero on overflow", () => {
    const INT_32_MAX_VALUE = 2 ** 31 - 1;
    const INT_32_MIN_VALUE = 2 ** 31 * -1;

    expect(reverse(INT_32_MAX_VALUE)).toBe(0);
    expect(reverse(INT_32_MIN_VALUE)).toBe(0);
  });
  it("should work on positive numbers", () => {
    expect(reverse(123)).toBe(321);
    expect(reverse(49567)).toBe(76594);
    expect(reverse(214748364)).toBe(463847412);
  });
  it("should work on negative numbers", () => {
    expect(reverse(-123)).toBe(-321);
    expect(reverse(-49567)).toBe(-76594);
    expect(reverse(-214748364)).toBe(-463847412);
  });
});
