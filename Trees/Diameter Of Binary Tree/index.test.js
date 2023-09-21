const { diameterOfBinaryTree, tree1, tree2 } = require('./index')

describe('testing diameter of binary tree soluion', () => {
  it('test case one', () => {
    expect(diameterOfBinaryTree(tree1)).toEqual(3)
  })

  it('test case two', () => {
    expect(diameterOfBinaryTree(tree2)).toEqual(1)
  })
})