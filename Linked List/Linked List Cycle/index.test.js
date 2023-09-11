const { hasCycle, node1 } = require('./index')

describe('testing the linked list has a cycle or not', () => {
  it('1st case should return true', () => {
    expect(hasCycle(node1)).toEqual(true)
  })
})
