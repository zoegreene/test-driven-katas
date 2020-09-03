const { expect } = require('chai');
const longestCommonPrefix = require('./longestCommonPrefix');

describe('longestCommonPrefix function', () => {
  it('returns an empty string if there is no common prefix', () => {
    expect(longestCommonPrefix(['zoe','greene'])).to.equal('');
  })
  it('returns an empty string if given an empty array', () => {
    expect(longestCommonPrefix([])).to.equal('');
  })
  it('returns the word if the array is of length 1', () => {
    expect(longestCommonPrefix(['zoe'])).to.equal('zoe');
  })
  it ('returns the longest common prefix of the words in the given array', () => {
    expect(longestCommonPrefix(['foobar', 'foo', 'foolish'])).to.equal('foo');
  })
})
