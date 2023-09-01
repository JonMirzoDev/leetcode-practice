const reverseList = require('./index')

describe('testing reversing the list using linked list', () => {
  it('first test case: [1,2,3,4,5]', () => {
    expect(reverseList([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1])
  })

  it('second test case: [1,2]', () => {
    expect(reverseList([1, 2])).toEqual([2, 1])
  })
})
