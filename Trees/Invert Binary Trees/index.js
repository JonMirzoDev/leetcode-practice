class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value
    this.left = left
    this.right = right
  }
}

function invertTree(root) {
  if (root === null) return null

  let temp = root.left
  root.left = invertTree(root.right)
  root.right = invertTree(temp)

  return root
}

module.exports = { invertTree, TreeNode }
