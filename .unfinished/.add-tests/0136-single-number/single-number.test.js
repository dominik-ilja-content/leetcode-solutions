const singleNumber = require("./single-number");

/**
 * @param {number} amount Items to be generated
 * @param {boolean} positive Elements generated should be positive or not
 * @returns {number[]}
 * @desc Generates the specified amount of items into an array.
 *       Items can be positive or negative
 */

function generateArray(amount, positive = true, start = 0) {
  const arr = [];
  let step = positive ? 1 : -1;
  let value = start * step;

  for (let i = 0; i < amount; i++) {
    arr[i] = value;

    if (i % 2 !== 0) {
      value += step;
    }
  }

  return arr;
}

describe("tests for leetcode 136 - single number", () => {
  test("should return null if array has length of zero", () => {
    expect(singleNumber([])).toBe(null);
  });
  test("should work on single item arrays", () => {
    const items = 1;
    const positive = generateArray(items, true, 1);
    const negative = generateArray(items, false, 1);
    const expected = 1;

    expect(singleNumber(positive)).toBe(expected);
    expect(singleNumber(negative)).toBe(-expected);
  });
  test("should work on three item arrays", () => {
    const items = 3;
    const positive = generateArray(items, true);
    const negative = generateArray(items, false);
    const expected = 1;

    expect(singleNumber(positive)).toBe(expected);
    expect(singleNumber(negative)).toBe(-expected);
  });
  test("should work on five item arrays", () => {
    const items = 5;
    const positive = generateArray(items, true);
    const negative = generateArray(items, false);
    const expected = 2;

    expect(singleNumber(positive)).toBe(expected);
    expect(singleNumber(negative)).toBe(-expected);
  });
  test("should work on seven item arrays", () => {
    const items = 7;
    const positive = generateArray(items, true);
    const negative = generateArray(items, false);
    const expected = 3;

    expect(singleNumber(positive)).toBe(expected);
    expect(singleNumber(negative)).toBe(-expected);
  });
  test("should work on 30001 item arrays", () => {
    const items = 3 * 10 ** 4 + 1;
    const start = 15000;
    const positive = generateArray(items, true, start);
    const negative = generateArray(items, false, start);
    const expected = 30000;

    expect(singleNumber(positive)).toBe(expected);
    expect(singleNumber(negative)).toBe(-expected);
  });
});
