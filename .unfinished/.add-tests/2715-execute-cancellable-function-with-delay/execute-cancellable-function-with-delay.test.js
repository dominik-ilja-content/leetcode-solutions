const _ = require("./");
const {} = require("../../data_structures/");

describe("tests for leecode 0000 - name", () => {
  describe("should return correct result for different inputs", () => {
    it("", () => {
      const result = [];
      const fn = (x) => x * 5;
      const args = [2],
        t = 20,
        cancelT = 50;
      const log = (...argsArr) => {
        result.push(fn(...argsArr));
      };
      const cancel = cancellable(fn, args, t);

      setTimeout(() => {
        cancel();
        // console.log(result); // [{"time":20,"returned":10}]
      }, cancelT);

      let setup = null;
      let expected = null;
      // let result = null;
      expect(result).toBe(expected);
    });
  });

  it("", () => {
    let setup = null;
    let expected = null;
    let result = null;
    expect(result).toBe(expected);
  });
});
