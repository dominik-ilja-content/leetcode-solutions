/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  return function (x) {
    let result = x;
    for (let i = functions.length - 1; i >= 0; i--) {
      result = functions[i](result);
    }
    return result;
  };
};

/*
    [f(x), g(x), h(x)] is fn(x) = f(g(h(x)))
    call h & give its result to g
    call g & give its result to f
    call f & return the result
*/
/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
