const twoSum = require('./index')

describe('returns the two array elemnts positions in array which their sum is equal to target element', () => {
  it('should return the expected positions', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([0, 1])
  })

  it('second test case', () => {
    expect(twoSum([3, 2, 4], 6)).toStrictEqual([1, 2])
  })
})