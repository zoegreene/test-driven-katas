const twoSum = (nums, target) => {
  if (nums.length < 2) {
    return [];
  }
  const seen = {};
  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    const numToFind = target - currentNum;
    if (seen[numToFind] !== undefined) {
      return [seen[numToFind], i];
    }
    seen[currentNum] = i;
  }
  return [];
}

module.exports = twoSum;
