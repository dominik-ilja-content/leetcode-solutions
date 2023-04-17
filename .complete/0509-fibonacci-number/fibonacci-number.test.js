const fib = require("./fibonacci-number");

describe("tests for leecode 509 - fibonacci number", () => {
  it("Should return 0 for zero", () => {
    let n = 0;
    let expected = 0;
    let result = fib(n);
    expect(result).toBe(expected);
  });
  it("Should return 1 for one", () => {
    let n = 1;
    let expected = 1;
    let result = fib(n);
    expect(result).toBe(expected);
  });
  it("Should return 1 for two", () => {
    let n = 2;
    let expected = 1;
    let result = fib(n);
    expect(result).toBe(expected);
  });
  it("Should return 2 for three", () => {
    let n = 3;
    let expected = 2;
    let result = fib(n);
    expect(result).toBe(expected);
  });
  it("Should return 3 for four", () => {
    let n = 4;
    let expected = 3;
    let result = fib(n);
    expect(result).toBe(expected);
  });
  it("Should return 5 for five", () => {
    let n = 5;
    let expected = 5;
    let result = fib(n);
    expect(result).toBe(expected);
  });
  it("Should return 8 for six", () => {
    let n = 6;
    let expected = 8;
    let result = fib(n);
    expect(result).toBe(expected);
  });
  it("Should return 13 for seven", () => {
    let n = 7;
    let expected = 13;
    let result = fib(n);
    expect(result).toBe(expected);
  });
  it("Should return 21 for eight", () => {
    let n = 8;
    let expected = 21;
    let result = fib(n);
    expect(result).toBe(expected);
  });
  it("Should return 34 for nine", () => {
    let n = 9;
    let expected = 34;
    let result = fib(n);
    expect(result).toBe(expected);
  });
  it("Should return 55 for ten", () => {
    let n = 10;
    let expected = 55;
    let result = fib(n);
    expect(result).toBe(expected);
  });
  it("Should return 89 for eleven", () => {
    let n = 11;
    let expected = 89;
    let result = fib(n);
    expect(result).toBe(expected);
  });
  it("Should return 144 for eleven", () => {
    let n = 12;
    let expected = 144;
    let result = fib(n);
    expect(result).toBe(expected);
  });
  it("Should return 832040 for thirty", () => {
    let n = 30;
    let expected = 832040;
    let result = fib(n);
    expect(result).toBe(expected);
  });
});
