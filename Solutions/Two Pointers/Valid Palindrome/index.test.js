const isPalindrome = require('./index')

describe('check the string is palindrome', () => {
  it('should return true; palindrome', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true)
  })

  it('should return false; not palindrome', () => {
    expect(isPalindrome('race a car')).toBe(false)
  })
})
