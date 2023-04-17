const countDigits = require("./count-the-digits-that-divide-a-number");

/*
    1 <= num <= 10^9
    num does not contain 0 as one of its digits.
*/

describe("tests for leecode 2520 - count the digits that divide a number", () => {
  it("should return one if the amount of digits is one", () => {
    let num = 1;
    let expected = 1;
    let result = countDigits(num);
    expect(result).toBe(expected);

    num = 3;
    expected = 1;
    result = countDigits(num);
    expect(result).toBe(expected);

    num = 7;
    expected = 1;
    result = countDigits(num);
    expect(result).toBe(expected);
  });
  it("should return two", () => {
    let num = 11;
    let expected = 2;
    let result = countDigits(num);
    expect(result).toBe(expected);

    num = 393;
    expected = 2;
    result = countDigits(num);
    expect(result).toBe(expected);

    num = 77;
    expected = 2;
    result = countDigits(num);
    expect(result).toBe(expected);
  });
  it("should return four", () => {
    let num = 1248;
    let expected = 4;
    let result = countDigits(num);
    expect(result).toBe(expected);
  });
  it("should return five", () => {
    let num = 11111;
    let expected = 5;
    let result = countDigits(num);
    expect(result).toBe(expected);
  });
});
