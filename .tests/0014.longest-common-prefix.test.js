const expect = require('chai').expect;
const longestCommonPrefix = require('../completed/0014.longest-common-prefix');
// const longestCommonPrefix = require('../0014.longest-common-prefix');

describe('0014 Longest Common Prefix', function () {
  it('should return an empty string if array length is 0', function () {
    expect(longestCommonPrefix([])).to.equal('');
  });
  it('should return array index of 0 if array length is 1', function () {
    expect(longestCommonPrefix(['cat'])).to.equal('cat');
  });
  it('should return an empty string if no common prefix', function () {
    expect(longestCommonPrefix(['dog', 'cat', 'pig'])).to.equal('');
  });
  it('should return the common prefix with same length strings', function () {
    expect(longestCommonPrefix(['d', 'd', 'd'])).to.equal('d');
    expect(longestCommonPrefix(['dog', 'dob', 'dot'])).to.equal('do');
  });
  it('should return the common prefix with different length strings', function () {
    expect(longestCommonPrefix(['flower', 'flow', 'flight'])).to.equal('fl');
    expect(longestCommonPrefix(['darwin', 'dark', 'darn'])).to.equal('dar');
  });
});
