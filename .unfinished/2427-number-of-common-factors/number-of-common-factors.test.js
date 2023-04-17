const commonFactors = require("./number-of-common-factors");

/*
    a & b must be between 1 & 1000
*/

describe("tests for leecode 2427 - number of common factors", () => {
  it("should return 1 when 1 and 1 are passed", () => {
    let a = 1;
    let b = 1;
    let expected = 1;
    let result = commonFactors(a, b);
    expect(result).toBe(expected);
  });
  it("should return 2 when 25 and 30 are passed", () => {
    let a = 25;
    let b = 30;
    let expected = 2;
    let result = commonFactors(a, b);
    expect(result).toBe(expected);

    a = 30;
    b = 25;
    expected = 2;
    result = commonFactors(a, b);
    expect(result).toBe(expected);
  });
  it("should return 4 when 12 and 6 are passed", () => {
    let a = 12;
    let b = 6;
    let expected = 4;
    let result = commonFactors(a, b);
    expect(result).toBe(expected);

    a = 6;
    b = 12;
    expected = 4;
    result = commonFactors(a, b);
    expect(result).toBe(expected);
  });
  it("should return 16 when 1000 and 1000 are passed", () => {
    let a = 1000;
    let b = 1000;
    let expected = 16;
    let result = commonFactors(a, b);
    expect(result).toBe(expected);
  });
});
