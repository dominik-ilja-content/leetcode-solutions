const myAtoi = require("./string-to-integer-atoi");

describe("Tests for Leetcode 8 String to Integer (aoti)", () => {
  it("should return zero if empty string is passed", () => {
    expect(myAtoi("")).toBe(0);
  });
  it("should return zero if only whitespace is passed", () => {
    expect(myAtoi(" ")).toBe(0);
    expect(myAtoi("   ")).toBe(0);
    expect(myAtoi("      ")).toBe(0);
  });
  it("should return 0 for strings with only characters", () => {
    expect(myAtoi("asdfasdf")).toBe(0);
    expect(myAtoi("asdf")).toBe(0);
    expect(myAtoi("asdcscsasc")).toBe(0);
  });
  it("should parse strings of only numbers", () => {
    expect(myAtoi("000000")).toBe(0);
    expect(myAtoi("42")).toBe(42);
    expect(myAtoi("100002")).toBe(100002);
    expect(myAtoi("3")).toBe(3);
    expect(myAtoi("333")).toBe(333);
  });
  it("should parse strings with leading signs", () => {
    expect(myAtoi("+42")).toBe(42);
    expect(myAtoi("-42")).toBe(-42);
    expect(myAtoi("+100002")).toBe(100002);
    expect(myAtoi("-100002")).toBe(-100002);
    expect(myAtoi("+3")).toBe(3);
    expect(myAtoi("-3")).toBe(-3);
    expect(myAtoi("+333")).toBe(333);
    expect(myAtoi("-333")).toBe(-333);
  });
  it("should parse strings with leading numbers", () => {
    expect(myAtoi("+42   asdfasdf")).toBe(42);
    expect(myAtoi("-42asdf")).toBe(-42);
    expect(myAtoi("-42asdf42")).toBe(-42);
  });
  it("should ignore leading whitespace", () => {
    expect(myAtoi("   +42asdfasdf")).toBe(42);
    expect(myAtoi("  -42asdf  ")).toBe(-42);
    expect(myAtoi(" asdf  ")).toBe(0);
  });
  test("if number overflows 32bit int then clamp value to be contained in 32bit int", () => {
    const max = 2 ** 31 - 1;
    const min = 2 ** 31 * -1;

    expect(myAtoi("-91283472332")).toBe(min);
    expect(myAtoi("  -91283472332asdasd")).toBe(min);
    expect(myAtoi("91283472332")).toBe(max);
    expect(myAtoi("91283472332 asdasd asdasd as")).toBe(max);
  });
  test("leetcode tests", () => {
    expect(myAtoi("42")).toBe(42);
    expect(myAtoi("    -42")).toBe(-42);
    expect(myAtoi("4193 with words")).toBe(4193);
  });
});
