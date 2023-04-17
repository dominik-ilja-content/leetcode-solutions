const twoSum = require('../completed/0001.two-sum');
const expect = require('chai').expect;


describe('0001 Two Sum', function () {
  it('Should return the correct indexes', function () {
    expect(twoSum([3, 3], 6)).deep.equal([0, 1]);
  });
});
