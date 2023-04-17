const intToRoman = require("./integer-to-roman");

describe("tests for leecode 12 - integer to roman", () => {
  it("should work with single values of 1, 5, 10, 50, 100, 500, & 1000", () => {
    expect(intToRoman(1)).toBe("I");
    expect(intToRoman(5)).toBe("V");
    expect(intToRoman(10)).toBe("X");
    expect(intToRoman(50)).toBe("L");
    expect(intToRoman(100)).toBe("C");
    expect(intToRoman(500)).toBe("D");
    expect(intToRoman(1000)).toBe("M");
  });
  it("should work with numbers up to 9", () => {
    expect(intToRoman(2)).toBe("II");
    expect(intToRoman(3)).toBe("III");
    expect(intToRoman(4)).toBe("IV");
    expect(intToRoman(7)).toBe("VII");
    expect(intToRoman(9)).toBe("IX");
  });
  it("should work with numbers up to 99", () => {
    expect(intToRoman(12)).toBe("XII");
    expect(intToRoman(64)).toBe("LXIV");
    expect(intToRoman(70)).toBe("LXX");
    expect(intToRoman(88)).toBe("LXXXVIII");
    expect(intToRoman(99)).toBe("XCIX");
  });
  it("should work with numbers up to 999", () => {
    expect(intToRoman(444)).toBe("CDXLIV");
    expect(intToRoman(502)).toBe("DII");
    expect(intToRoman(762)).toBe("DCCLXII");
    expect(intToRoman(888)).toBe("DCCCLXXXVIII");
    expect(intToRoman(953)).toBe("CMLIII");
  });
  it("should work with numbers up to 3998", () => {
    expect(intToRoman(1569)).toBe("MDLXIX");
    expect(intToRoman(1984)).toBe("MCMLXXXIV");
    expect(intToRoman(2222)).toBe("MMCCXXII");
    expect(intToRoman(2538)).toBe("MMDXXXVIII");
    expect(intToRoman(3879)).toBe("MMMDCCCLXXIX");
  });
  it("should work with numbers up to 3999", () => {
    expect(intToRoman(3999)).toBe("MMMCMXCIX");
  });
});
