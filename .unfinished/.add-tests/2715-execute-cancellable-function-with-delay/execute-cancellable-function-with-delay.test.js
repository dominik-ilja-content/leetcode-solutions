const cancellable = require("./execute-cancellable-function-with-delay");

describe("tests for leecode 2715 - execute cancellable function with delay", () => {
  describe("should return correct result for different inputs", () => {
    it("", async () => {
      let logs = [];
      let args = [2];
      let time = 20;
      let cancelTime = 50;
      let fn = (x) => x * 5;
      let log = (...args) => {
        logs.push(fn(...args));
      };
      let cancel = cancellable(log, args, time);
      let expected = [10];

      /* 
          how do we need to do this?
          we need to wait for the setTimeout to finish
          then see if logs matches expected
      */



      // const prom = new Promise((resolve, reject) => {
      //   setTimeout(() => {
      //     cancel();
      //     resolve(output);
      //   }, cancelT);
      // });
      // await prom;
      expect(result).toEqual(expected);
    });
  });
});
