const expect = require('chai').expect;
const lengthOfLastWord = require('../completed/0058.length-of-last-word');
// const lengthOfLastWord = require('../0058.length-of-last-word');

describe('0058 Length of Last Word', function () {
  it('Should return 0 if empty string is passed', function () {
    expect(lengthOfLastWord('')).to.equal(0);
  });
  it('Should return length of last word', function () {
    expect(lengthOfLastWord('a')).to.equal(1);
    expect(lengthOfLastWord('Hello World')).to.equal(5);
    expect(lengthOfLastWord('luffy is still joyboy')).to.equal(6);
    expect(lengthOfLastWord('my name is dominik')).to.equal(7);
  });
  it('Should ignore extra whitespace', function () {
    expect(lengthOfLastWord('      Hello World         ')).to.equal(5);
    expect(lengthOfLastWord('luffy          is still       joyboy           ')).to.equal(6);
    expect(lengthOfLastWord('      my      name is       dominik           ')).to.equal(7);
  });
});
