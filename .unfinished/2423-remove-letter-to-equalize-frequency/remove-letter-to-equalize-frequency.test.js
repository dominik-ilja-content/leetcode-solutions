const equalFrequency = require("./remove-letter-to-equalize-frequency");

describe("tests for leecode 2423 - remove letter to equalize frequency", () => {
  it("should return true if all letters are the same", () => {
    let word = "aaa";
    let expected = true;
    let result = equalFrequency(word);
    expect(result).toBe(expected);
  });
  it("should return true if frequency is 1 for all letters", () => {
    let word = "abcdefghijklmnopqrstuvwxyz";
    let expected = true;
    let result = equalFrequency(word);
    expect(result).toBe(expected);
  });
  it("should return true if only 1 letter frequency is 1 larger than other letter frequencies", () => {
    let word = "abcc";
    let expected = true;
    let result = equalFrequency(word);
    expect(result).toBe(expected);

    word = "aabbccc";
    expected = true;
    result = equalFrequency(word);
    expect(result).toBe(expected);

    word = "aaaaabbbbbcccccdddddeeeeefffffgggggg";
    expected = true;
    result = equalFrequency(word);
    expect(result).toBe(expected);
  });
  it("should return true if only 1 letter frequency is 1 smaller than other letter frequencies", () => {
    let word = "abbcc";
    let expected = true;
    let result = equalFrequency(word);
    expect(result).toBe(expected);

    word = "cccd";
    expected = true;
    result = equalFrequency(word);
    expect(result).toBe(expected);
  });
  it("should return false if all letters have the same frequency and that frequency is greater than 1", () => {
    let word = "aabbcc";
    let expected = false;
    let result = equalFrequency(word);
    expect(result).toBe(expected);

    word = "aaaaabbbbbcccccdddddeeeeefffffggggg";
    expected = false;
    result = equalFrequency(word);
    expect(result).toBe(expected);

    word = "aazz";
    expected = false;
    result = equalFrequency(word);
    expect(result).toBe(expected);
  });
});
