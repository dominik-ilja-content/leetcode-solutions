const expect = require('chai').expect;
// const missingNumber = require('../0268.missing-number');
const missingNumber = require('../completed/0268.missing-number');

describe('0268 Missing Number', function () {
  it('should work with single el arrays', function () {
    expect(missingNumber([0])).to.equal(1);
    expect(missingNumber([1])).to.equal(0);

  });
  it('should work with two el arrays', function () {
    expect(missingNumber([0, 1])).to.equal(2);
    expect(missingNumber([2, 1])).to.equal(0);
    expect(missingNumber([0, 2])).to.equal(1);
  });
  it('should work with many el arrays', function () {
    expect(missingNumber([3, 0, 1])).to.equal(2);
    expect(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])).to.equal(8);
  });
});
