const expect = require('chai').expect;
const searchInsert = require('../completed/0035.search-insert-position');
// const searchInsert = require('../0035.search-insert-position');

describe('0035 Search Insert Position', function () {
  it('should return 0 for targets less than all values', function () {
    expect(searchInsert([1, 2, 3, 4, 5], 0)).to.equal(0);
    expect(searchInsert([-100, -80, -77, -63, -5], -101)).to.equal(0);
  });
  it('should return array length for targets greater than all values', function () {
    expect(searchInsert([1, 2, 3, 4, 5], 6)).to.equal(5);
    expect(searchInsert([-100, -80, -77, -63, -5, 0, 5, 976], 1000)).to.equal(8);
  });
  it('should return the index of the value if there\'s a match', function () {
    expect(searchInsert([1, 2, 3, 4, 5], 5)).to.equal(4);
    expect(searchInsert([-100, -80, -77, -63, -5, 0, 5, 976], -5)).to.equal(4);
    expect(searchInsert([-100, -80, -77, -63, -5, 0, 5, 976], -77)).to.equal(2);
  });
  it('should return the correct index if value fits between two numbers', function () {
    expect(searchInsert([1, 2, 3, 4, 6], 5)).to.equal(4);
    expect(searchInsert([-100, -80, -77, -63, -5, 0, 5, 976], -4)).to.equal(5);
    expect(searchInsert([-100, -80, -77, -63, -5, 0, 5, 976], -79)).to.equal(2);
    expect(searchInsert([-100, -80, -77, -63, -5, 0, 5, 976], -99)).to.equal(1);
  });

});
