const expect = require('chai').expect;
// const mySqrt = require('../0069.sqrt-of-x');
const mySqrt = require('../completed/0069.sqrt-of-x');

describe('0069 Sqrt of X', function () {
  it('should work for zero', function () {
    expect(mySqrt(0)).to.equal(0);
  });
  it('should work for single digit numbers', function () {
    expect(mySqrt(1)).to.equal(1);
    expect(mySqrt(2)).to.equal(1);
    expect(mySqrt(3)).to.equal(1);
    expect(mySqrt(4)).to.equal(2);
    expect(mySqrt(5)).to.equal(2);
    expect(mySqrt(6)).to.equal(2);
    expect(mySqrt(7)).to.equal(2);
    expect(mySqrt(8)).to.equal(2);
    expect(mySqrt(9)).to.equal(3);
  });
  it('should work on random values', function () {
    expect(mySqrt(2147395599)).to.equal(46339);
  });

});
