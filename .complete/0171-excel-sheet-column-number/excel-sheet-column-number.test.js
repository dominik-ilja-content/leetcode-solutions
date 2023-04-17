const titleToNumber = require("./excel-sheet-column-number");

/*
    1 <= columnTitle.length <= 7
    columnTitle consists only of uppercase English letters.
    columnTitle is in the range ["A", "FXSHRXW"].
*/

describe("tests for leecode 171 - excel sheet column number", () => {
  it("should return a value between 1 & 26 for single uppercase letters", () => {
    let columnTitle = "A";
    let expected = 1;
    let result = titleToNumber(columnTitle);
    expect(result).toBe(expected);

    columnTitle = "P";
    expected = 16;
    result = titleToNumber(columnTitle);
    expect(result).toBe(expected);

    columnTitle = "Z";
    expected = 26;
    result = titleToNumber(columnTitle);
    expect(result).toBe(expected);
  });
  it("should return a value between 27 & 702 for single uppercase letters", () => {
    let columnTitle = "AA";
    let expected = 27;
    let result = titleToNumber(columnTitle);
    expect(result).toBe(expected);

    columnTitle = "BA";
    expected = 53;
    result = titleToNumber(columnTitle);
    expect(result).toBe(expected);

    columnTitle = "ZZ";
    expected = 702;
    result = titleToNumber(columnTitle);
    expect(result).toBe(expected);
  });
  it("should calculate the maximum value", () => {
    let columnTitle = "FXSHRXW";
    let expected = 2147483647;
    let result = titleToNumber(columnTitle);
    expect(result).toBe(expected);
  });
});
