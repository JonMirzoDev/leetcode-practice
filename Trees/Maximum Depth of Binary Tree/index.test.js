const {maxDepth, TreeNode, root1, root2} = require('./index')

describe('maximum depth of binary tree solution testing', () => {
  it('test case one', () => {
    expect(maxDepth(root1)).toEqual(3)
  })

  it('test case two', () => {
    expect(maxDepth(root2)).toEqual(2)
  })
})