const twoSum = (nums, target) => {
  const numIndices = {}

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]

    if (numIndices[complement] !== undefined) return [numIndices[complement], i]

    numIndices[nums[i]] = i
  }
}

module.exports = twoSum
