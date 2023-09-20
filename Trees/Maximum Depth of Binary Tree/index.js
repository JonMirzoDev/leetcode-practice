function TreeNode(val, left = null, right = null) {
  this.val = val
  this.left = left
  this.right = right
}

const maxDepth = (root) => {
  if (!root) return 0
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
}

const root1 = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
)

const root2 = new TreeNode(1, null, new TreeNode(2))

module.exports = { maxDepth, TreeNode, root1, root2 }
