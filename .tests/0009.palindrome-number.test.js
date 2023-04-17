const isPalindrome = require('../completed/0009.palindrome-number');
const expect = require('chai').expect;


describe('0009 Palindrome Number', function () {
  it('Should return false for values less than 0', function () {
    expect(isPalindrome(-100)).to.be.false;
    expect(isPalindrome(-10)).to.be.false;
    expect(isPalindrome(-1)).to.be.false;
  });
  it('Should return true for single digit numbers', function () {
    expect(isPalindrome(0)).to.be.true;
    expect(isPalindrome(1)).to.be.true;
    expect(isPalindrome(9)).to.be.true;
  });
  it('Should work for even numbers', function () {
    expect(isPalindrome(10)).to.be.false;
    expect(isPalindrome(12)).to.be.false;
    expect(isPalindrome(1010)).to.be.false;
    expect(isPalindrome(90123109)).to.be.false;
    expect(isPalindrome(11)).to.be.true;
    expect(isPalindrome(3333)).to.be.true;
    expect(isPalindrome(4004)).to.be.true;
    expect(isPalindrome(90122109)).to.be.true;
  });
  it('Should work for odd numbers', function () {
    expect(isPalindrome(100)).to.be.false;
    expect(isPalindrome(120)).to.be.false;
    expect(isPalindrome(10108)).to.be.false;
    expect(isPalindrome(901234109)).to.be.false;
    expect(isPalindrome(111)).to.be.true;
    expect(isPalindrome(33433)).to.be.true;
    expect(isPalindrome(4056504)).to.be.true;
    expect(isPalindrome(90127872109)).to.be.true;
  });
});
