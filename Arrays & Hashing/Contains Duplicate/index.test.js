const containsDuplicate = require('./index')

describe('tests duplicate values', () => {
  it('should return true', () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBe(true)
  })

  it('should return false', () => {
    expect(containsDuplicate([1, 2, 3, 4])).toBe(false)
  })
})
