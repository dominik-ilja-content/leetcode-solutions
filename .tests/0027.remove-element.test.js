const expect = require('chai').expect;
const removeElement = require('../completed/0027.remove-element');
// const removeElement = require('../0027.remove-element');

describe('0027 Remove Element', function () {
  it('should return zero for arrays with no elements', function () {
    expect(removeElement([], 0)).to.equal(0);
  });
  it('should work on arrays with one element', function () {
    expect(removeElement([0], 0)).to.equal(0);
    expect(removeElement([1], 0)).to.equal(1);
  });
  it('should work on arrays with two elements', function () {
    expect(removeElement([0, 0], 0)).to.equal(0);
    expect(removeElement([1, 0], 0)).to.equal(1);
    expect(removeElement([1, 1], 0)).to.equal(2);
  });
  it('should work on arrays with many elements', function () {
    expect(removeElement([3, 2, 2, 3], 3)).to.equal(2);
    expect(removeElement([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 0)).to.equal(0);
    expect(removeElement([1, 1, 1, 1, 1, 0, 0, 0, 0, 0], 0)).to.equal(5);
    expect(removeElement([1, 1, 1, 1, 1, 1, 1, 1, 1, 0], 0)).to.equal(9);
  });
});
