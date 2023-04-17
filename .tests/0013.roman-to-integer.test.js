const expect = require('chai').expect;
const romanToInt = require('../completed/0013.roman-to-integer');

describe('0013 Roman To Integer', function () {
  it('should work on single letters', function () {
    expect(romanToInt('I')).to.equal(1);
    expect(romanToInt('V')).to.equal(5);
    expect(romanToInt('X')).to.equal(10);
    expect(romanToInt('L')).to.equal(50);
    expect(romanToInt('C')).to.equal(100);
    expect(romanToInt('D')).to.equal(500);
    expect(romanToInt('M')).to.equal(1000);
  });
  it('should work on double letters', function () {
    expect(romanToInt('II')).to.equal(2);
    expect(romanToInt('VI')).to.equal(6);
    expect(romanToInt('XV')).to.equal(15);
    expect(romanToInt('LX')).to.equal(60);
    expect(romanToInt('CL')).to.equal(150);
    expect(romanToInt('DC')).to.equal(600);
    expect(romanToInt('MD')).to.equal(1500);
  });
  it('should work on triple letters', function () {
    expect(romanToInt('III')).to.equal(3);
    expect(romanToInt('VII')).to.equal(7);
    expect(romanToInt('XVI')).to.equal(16);
    expect(romanToInt('LXV')).to.equal(65);
    expect(romanToInt('CLX')).to.equal(160);
    expect(romanToInt('DCL')).to.equal(650);
    expect(romanToInt('MDC')).to.equal(1600);
  });
  it('should work on double letters with reducer character in front of it', function () {
    expect(romanToInt('IV')).to.equal(4);
    expect(romanToInt('IX')).to.equal(9);
    expect(romanToInt('XL')).to.equal(40);
    expect(romanToInt('XC')).to.equal(90);
    expect(romanToInt('CD')).to.equal(400);
    expect(romanToInt('CM')).to.equal(900);
  });
  it('should work on triple letters with reducer character in front of it', function () {
    expect(romanToInt('XIV')).to.equal(14);
    expect(romanToInt('XIX')).to.equal(19);
  });
  it('should work on values up to 3999', function () {
    expect(romanToInt('MCMLXXIII')).to.equal(1973);
    expect(romanToInt('MMCDXCVII')).to.equal(2497);
    expect(romanToInt('MMMCMXCIX')).to.equal(3999);
  });
});
