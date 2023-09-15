const search = require('./index')

describe('binary search algorithm testing', () => {
  it('first test case, should return correct index', () => {
    expect(search([-1, 0, 3, 5, 9, 12], 9)).toEqual(4)
  })

  it('should return -1, not found case', () => {
    expect(search([-1, 0, 3, 5, 9, 12], 2)).toEqual(-1)
  })
})