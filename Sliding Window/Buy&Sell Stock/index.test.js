const maxProfit = require('./index')

describe('testing when to buy and sell stock function for maximum profit', () => {
  it('test one', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5)
  })

  it('test two', () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0)
  })
})