const mergeTwoLists = require('./index')

describe('merge two sorted linked list', () => {
  it('first test', () => {
    expect(mergeTwoLists([1, 2, 4], [1, 3, 4])).toEqual([1, 1, 2, 3, 4, 4])
  })

  it('second test', () => {
    expect(mergeTwoLists([], [0])).toEqual([0])
  })
})