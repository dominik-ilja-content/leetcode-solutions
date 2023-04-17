const expect = require('chai').expect;
const isValid = require('../completed/0020.valid-parentheses');
// const isValid = require('../0020.valid-parentheses');

describe('0020 Valid Parentheses', function () {
  it('should work for single match pair', function () {
    expect(isValid('()')).to.be.true;
    expect(isValid('[]')).to.be.true;
    expect(isValid('{}')).to.be.true;
  });
  it('should work for single invalid parentheses', function () {
    expect(isValid('(')).to.be.false;
    expect(isValid('[')).to.be.false;
    expect(isValid('{')).to.be.false;
    expect(isValid(')')).to.be.false;
    expect(isValid(']')).to.be.false;
    expect(isValid('}')).to.be.false;
  });
  it('should work for multiple matching pairs', function () {
    expect(isValid('()[]{}')).to.be.true;
    expect(isValid('[]{}()')).to.be.true;
    expect(isValid('{}[]()')).to.be.true;
  });
  it('should work for multiple invalid pairs', function () {
    expect(isValid('()[{}')).to.be.false;
    expect(isValid('[]{})')).to.be.false;
    expect(isValid('{[]()')).to.be.false;
  });
  it('should work for nested matching pairs', function () {
    expect(isValid('([{}])')).to.be.true;
    expect(isValid('[{()}]')).to.be.true;
    expect(isValid('{[{([{}])}]}')).to.be.true;
  });
  it('should work for nested invalid pairs', function () {
    expect(isValid('([{}]')).to.be.false;
    expect(isValid('[{())}]')).to.be.false;
    expect(isValid('{[{([{}]}]}')).to.be.false;
  });
});
