const letterCombinations = require("./letter-combinations-of-a-phone-number");

describe("tests for leecode 17 - letter combinations of a phone number", () => {
  it("should return an empty array if digits is an empty string", () => {
    let digits = "";
    let expected = [];
    let result = letterCombinations(digits);
    expect(result).toEqual(expected);
  });
  it("should return the letters associated with the number", () => {
    let digits = "2";
    let expected = ["a", "b", "c"];
    let result = letterCombinations(digits);
    expect(result).toEqual(expected);

    digits = "3";
    expected = ["d", "e", "f"];
    result = letterCombinations(digits);
    expect(result).toEqual(expected);

    digits = "4";
    expected = ["g", "h", "i"];
    result = letterCombinations(digits);
    expect(result).toEqual(expected);

    digits = "5";
    expected = ["j", "k", "l"];
    result = letterCombinations(digits);
    expect(result).toEqual(expected);

    digits = "6";
    expected = ["m", "n", "o"];
    result = letterCombinations(digits);
    expect(result).toEqual(expected);

    digits = "7";
    expected = ["p", "q", "r", "s"];
    result = letterCombinations(digits);
    expect(result).toEqual(expected);

    digits = "8";
    expected = ["t", "u", "v"];
    result = letterCombinations(digits);
    expect(result).toEqual(expected);

    digits = "9";
    expected = ["w", "x", "y", "z"];
    result = letterCombinations(digits);
    expect(result).toEqual(expected);
  });
  it("should return all combinations for multiple numbers", () => {
    let digits = "23";
    let expected = ["ad", "bd", "cd", "ae", "be", "ce", "af", "bf", "cf"];
    let result = letterCombinations(digits);
    expect(result).toEqual(expected);

    digits = "6789";
    expected = [
      "mptw",
      "nptw",
      "optw",
      "mqtw",
      "nqtw",
      "oqtw",
      "mrtw",
      "nrtw",
      "ortw",
      "mstw",
      "nstw",
      "ostw",
      "mpuw",
      "npuw",
      "opuw",
      "mquw",
      "nquw",
      "oquw",
      "mruw",
      "nruw",
      "oruw",
      "msuw",
      "nsuw",
      "osuw",
      "mpvw",
      "npvw",
      "opvw",
      "mqvw",
      "nqvw",
      "oqvw",
      "mrvw",
      "nrvw",
      "orvw",
      "msvw",
      "nsvw",
      "osvw",
      "mptx",
      "nptx",
      "optx",
      "mqtx",
      "nqtx",
      "oqtx",
      "mrtx",
      "nrtx",
      "ortx",
      "mstx",
      "nstx",
      "ostx",
      "mpux",
      "npux",
      "opux",
      "mqux",
      "nqux",
      "oqux",
      "mrux",
      "nrux",
      "orux",
      "msux",
      "nsux",
      "osux",
      "mpvx",
      "npvx",
      "opvx",
      "mqvx",
      "nqvx",
      "oqvx",
      "mrvx",
      "nrvx",
      "orvx",
      "msvx",
      "nsvx",
      "osvx",
      "mpty",
      "npty",
      "opty",
      "mqty",
      "nqty",
      "oqty",
      "mrty",
      "nrty",
      "orty",
      "msty",
      "nsty",
      "osty",
      "mpuy",
      "npuy",
      "opuy",
      "mquy",
      "nquy",
      "oquy",
      "mruy",
      "nruy",
      "oruy",
      "msuy",
      "nsuy",
      "osuy",
      "mpvy",
      "npvy",
      "opvy",
      "mqvy",
      "nqvy",
      "oqvy",
      "mrvy",
      "nrvy",
      "orvy",
      "msvy",
      "nsvy",
      "osvy",
      "mptz",
      "nptz",
      "optz",
      "mqtz",
      "nqtz",
      "oqtz",
      "mrtz",
      "nrtz",
      "ortz",
      "mstz",
      "nstz",
      "ostz",
      "mpuz",
      "npuz",
      "opuz",
      "mquz",
      "nquz",
      "oquz",
      "mruz",
      "nruz",
      "oruz",
      "msuz",
      "nsuz",
      "osuz",
      "mpvz",
      "npvz",
      "opvz",
      "mqvz",
      "nqvz",
      "oqvz",
      "mrvz",
      "nrvz",
      "orvz",
      "msvz",
      "nsvz",
      "osvz",
    ];
    result = letterCombinations(digits);
    expect(result).toEqual(expected);
  });
});
