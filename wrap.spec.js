const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  const length = 5;
  let wrapped = wrap('the quick brown fox', length);
  wrapped = wrapped.split('\n');
  wrapped = wrapped[0];

  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });
  it('Returns the string if the length of the string is less than or equal to the given length', () => {
    expect(wrap('fullstack', 20)).to.equal('fullstack');
  });
  it('Returned string lines are not longer than given length', () => {
    expect(wrapped.length).to.equal(3);
  })
  it('Puts in line breaks', () => {
    expect(wrap("Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.", 20)).to.equal('Lorem ipsum dolor\nsit eu amet, elit na\nmagna sem amet nulla\nvel purus ac ligula.\n');
  })
  it('Returns an error if a single word is longer than the maxLen', () => {
    expect(wrap('The quick brown fox', 4)).to.equal('Error!');
  })
});

