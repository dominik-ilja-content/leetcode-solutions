const expect = require('chai').expect;
const plusOne = require('../completed/0066.plus-one');
// const plusOne = require('../0066.plus-one');

describe('0066 Plus One', function () {
  it('should work for single digit numbers', function () {
    expect(plusOne([0])).to.deep.equal([1]);
    expect(plusOne([5])).to.deep.equal([6]);
    expect(plusOne([9])).to.deep.equal([1, 0]);
  });
  it('should work for multiple digit numbers', function () {
    expect(plusOne([1, 0])).to.deep.equal([1, 1]);
    expect(plusOne([5, 1])).to.deep.equal([5, 2]);
    expect(plusOne([9, 9])).to.deep.equal([1, 0, 0]);
    expect(plusOne([9, 9, 9, 9])).to.deep.equal([1, 0, 0, 0, 0]);
  });
});
