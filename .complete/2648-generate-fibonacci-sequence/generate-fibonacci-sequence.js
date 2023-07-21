/**
 * @return {Generator<number>}
 */
var fibGenerator = function* () {
  let prev = 0;
  let curr = 1;
  yield prev;
  yield curr;

  while (true) {
    yield prev + curr;
    let temp = prev;
    prev = curr;
    curr = temp + curr;
  }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */

module.exports = fibGenerator;
