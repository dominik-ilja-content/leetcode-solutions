const expect = require('chai').expect;
// const addBinary = require('../0067.add-binary');
const addBinary = require('../completed/0067.add-binary');

describe('0067 Add Binary', function () {
  it('should work with single digit binary numbers', function () {
    expect(addBinary('0', '1')).to.equal('1');
    expect(addBinary('1', '1')).to.equal('10');
  });
  it('should work with double digit binary numbers', function () {
    expect(addBinary('10', '10')).to.equal('100');
    expect(addBinary('11', '10')).to.equal('101');
    expect(addBinary('11', '11')).to.equal('110');
  });
  it('should work with varying length binary numbers', function () {
    expect(addBinary('1000', '10')).to.equal('1010');
    expect(addBinary('1111', '1')).to.equal('10000');
    expect(addBinary('1101', '111111')).to.equal('1001100');
  });
});
