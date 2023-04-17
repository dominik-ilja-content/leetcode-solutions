const addTwoNumbers = require('../0002.add-two-numbers');
const expect = require('chai').expect;

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

describe('0002 Add Two Numbers', function () {
  it('Should work on values that don\'t have a carry', function () {
    const list1 = new ListNode(1,
      new ListNode(3,
        new ListNode(3)
      )
    );
    const list2 = new ListNode(5,
      new ListNode(6,
        new ListNode(4)
      ));
    const answer = new ListNode(6,
      new ListNode(9,
        new ListNode(7)));

    expect(addTwoNumbers(list1, list2)).to.deep.equal(answer);
  });
  it('Should work on values that have a carry', function () {
    const list1 = new ListNode(1);
    const list2 = new ListNode(9);
    const answer = new ListNode(0, new ListNode(1));

    expect(addTwoNumbers(list1, list2)).to.deep.equal(answer);
  });
  it('Should work on lists of unequal sizes', function () {
    const answer1 = new ListNode(3, new ListNode(1));
    const answer2 = new ListNode(8, new ListNode(0, new ListNode(1)));

    expect(addTwoNumbers(new ListNode(1, new ListNode(1)), new ListNode(2))).to.deep.equal(answer1);
    expect(addTwoNumbers(new ListNode(9, new ListNode(9)), new ListNode(9))).to.deep.equal(answer2);
  });
});
