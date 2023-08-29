const isAnagram = require('./index')

describe('check the second string is the anagram of the first one', () => {
  it('should return true', () => {
    expect(isAnagram('anagram', 'nagaram')).toBe(true)
  })

  it('should return false', () => {
    expect(isAnagram('rat', 'car')).toBe(false)
  })
})
