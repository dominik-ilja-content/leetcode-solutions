const expect = require('chai').expect;
// const removeDuplicates = require('../0026.remove-duplicates-from-sorted-array');
const removeDuplicates = require('../completed/0026.remove-duplicates-from-sorted-array');

describe('0026 Remove Duplicates from Sorted Array', function () {
  it('should return the array length for lengths of 0 & 1', function () {
    expect(removeDuplicates([])).to.equal(0);
    expect(removeDuplicates([1])).to.equal(1);
  });
  it('should work for arrays of all unique values', function () {
    expect(removeDuplicates([1, 2, 3])).to.equal(3);
    expect(removeDuplicates([2, 4, 6, 8, 10, 12])).to.equal(6);
    expect(removeDuplicates([3, 6, 9, 12, 15, 18, 21, 24, 27, 28, 29, 30])).to.equal(12);
  });
  it('should move duplicates to end of the array', function () {
    const nums1 = [2, 2];
    const nums2 = [1, 2, 2, 2, 4];
    const nums3 = [-10, -10, -10, -5, 0, 1, 2, 2, 2, 4, 4, 4, 8];
    removeDuplicates(nums1);
    removeDuplicates(nums2);
    removeDuplicates(nums3);

    expect(nums1).to.deep.equal([2, 2]);
    expect(nums2).to.deep.equal([1, 2, 4, 2, 4]);
    expect(nums3).to.deep.equal([-10, -5, 0, 1, 2, 4, 8, 2, 2, 4, 4, 4, 8]);
  });
  it('should return the amount of unique numbers when the array has duplicates', function () {
    expect(removeDuplicates([2, 2])).to.equal(1);
    expect(removeDuplicates([1, 2, 2, 2, 4])).to.equal(3);
    expect(removeDuplicates([-10, -10, -10, -5, 0, 1, 2, 2, 2, 4, 4, 4, 8])).to.equal(7);
  });
});
