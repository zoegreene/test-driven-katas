const { expect } = require('chai');
const twoSum = require('./twoSum');

describe('The function twoSum', () => {
  it ('an empty array returns an empty array', () => {
    expect(twoSum([], 8)).to.eql([]);
  })
  it ('an array with fewer than 2 elements returns an empty array', () => {
    expect(twoSum([1], 8)).to.eql([]);
  })
  it ('an array that does not contain elements that sum to the target returns an empty array', () => {
    expect(twoSum([1, 2, 3], 7)).to.eql([]);
  })
  it ('returns the indices of elements that sum to the target', () => {
    expect(twoSum([1, 2, 3], 5)).to.eql([1, 2]);
  })
})
