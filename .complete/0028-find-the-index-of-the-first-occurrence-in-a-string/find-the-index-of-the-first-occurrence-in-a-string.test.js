const strStr = require("./find-the-index-of-the-first-occurrence-in-a-string");

describe("tests for leecode 28 - find the index of the first occurrence in a string", () => {
  it("should return -1 if needle string is longer than haystack string", () => {
    let needle = "aa";
    let haystack = "a";
    let expected = -1;
    let result = strStr(haystack, needle);
    expect(result).toBe(expected);
  });
  it("should return the index of where the first match starts", () => {
    let needle = "a";
    let haystack = "a";
    let expected = 0;
    let result = strStr(haystack, needle);
    expect(result).toBe(expected);

    needle = "sad";
    haystack = "asasasada";
    expected = 5;
    result = strStr(haystack, needle);
    expect(result).toBe(expected);

    needle = "issip";
    haystack = "mississippi";
    expected = 4;
    result = strStr(haystack, needle);
    expect(result).toBe(expected);

    needle = "issip";
    haystack = "missiissippi";
    expected = 5;
    result = strStr(haystack, needle);
    expect(result).toBe(expected);
  });
  it("should return -1 if there are no matches", () => {
    let needle = "b";
    let haystack = "a";
    let expected = -1;
    let result = strStr(haystack, needle);
    expect(result).toBe(expected);

    needle = "bad";
    haystack = "abaada";
    expected = -1;
    result = strStr(haystack, needle);
    expect(result).toBe(expected);
  });
});
