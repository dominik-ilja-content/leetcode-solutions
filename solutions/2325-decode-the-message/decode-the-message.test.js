const decodeMessage = require("./decode-the-message");

describe("tests for leecode 2325 - decode the message", () => {
  it("should work for one character message", () => {
    let key = "abcdefghijklmnopqrstuvwxyz";
    let message = "a";
    let expected = "a";
    let result = decodeMessage(key, message);
    expect(result).toBe(expected);

    key = "zyxwvutsrqponmlkjihgfedcba";
    message = "a";
    expected = "z";
    result = decodeMessage(key, message);
    expect(result).toBe(expected);
  });
  it("should work for messages without spaces", () => {
    let key = "zyxwvutsrqponmlkjihgfedcba";
    let message = "zxv";
    let expected = "ace";
    let result = decodeMessage(key, message);
    expect(result).toBe(expected);
  });
  it("should work for messages with spaces", () => {
    let key = "zyxwvutsrqponmlkjihgfedcba";
    let message = "yrt blhsr";
    let expected = "big yoshi";
    let result = decodeMessage(key, message);
    expect(result).toBe(expected);

    key = "the quick brown fox jumps over the lazy dog";
    message = "vkbs bs t suepuv";
    expected = "this is a secret";
    result = decodeMessage(key, message);
    expect(result).toBe(expected);

    key = "eljuxhpwnyrdgtqkviszcfmabo";
    message = "zwx hnfx lqantp mnoeius ycgk vcnjrdb";
    expected = "the five boxing wizards jump quickly";
    result = decodeMessage(key, message);
    expect(result).toBe(expected);
  });
});
