const climbStairs = require("./climbing-stairs");

describe("tests for leecode 70 - climbing stairs", () => {
  it("should return 1 if the input is 1", () => {
    let stairs = 1;
    let expected = 1;
    let result = climbStairs(stairs);
    expect(result).toBe(expected);
  });
  it("should return 2 if the input is 2", () => {
    let stairs = 2;
    let expected = 2;
    let result = climbStairs(stairs);
    expect(result).toBe(expected);
  });
  it("should return 3 if the input is 3", () => {
    let stairs = 3;
    let expected = 3;
    let result = climbStairs(stairs);
    expect(result).toBe(expected);
  });
  it("should return 5 if the input is 4", () => {
    let stairs = 4;
    let expected = 5;
    let result = climbStairs(stairs);
    expect(result).toBe(expected);
  });
  it("should return 8 if the input is 5", () => {
    let stairs = 5;
    let expected = 8;
    let result = climbStairs(stairs);
    expect(result).toBe(expected);
  });
  it("should return 1836311903 if the input is 45", () => {
    let stairs = 45;
    let expected = 1836311903;
    let result = climbStairs(stairs);
    expect(result).toBe(expected);
  });
});
