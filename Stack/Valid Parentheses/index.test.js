const isValidParentheses = require('./index')

describe('testing the validity of the parentheses', () => {
  it('should return true, valid parentheses', () => {
    expect(isValidParentheses('()[]{}')).toBe(true)
  })

  it('should return true, valid parentheses', () => {
    expect(isValidParentheses('[{}]()')).toBe(true)
  })

  it('should return true, valid parentheses', () => {
    expect(isValidParentheses('[){)}]')).toBe(false)
  })
})