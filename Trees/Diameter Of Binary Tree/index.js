// Function to build the tree from an array
function buildTree(arr, index = 0) {
  if (index >= arr.length || arr[index] === null) return null

  const root = new TreeNode(arr[index])
  root.left = buildTree(arr, 2 * index + 1)
  root.right = buildTree(arr, 2 * index + 2)

  return root
}

class TreeNode {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

let longestPath = 0

function findLongestPath(root) {
  if (root === null) return 0

  let left = findLongestPath(root.left)
  let right = findLongestPath(root.right)

  longestPath = Math.max(longestPath, left + right)

  return Math.max(left, right) + 1
}

function diameterOfBinaryTree(root) {
  longestPath = 0
  findLongestPath(root)
  return longestPath
}

let tree1 = buildTree([1, 2, 3, 4, 5])
console.log(diameterOfBinaryTree(tree1)) // Output should be 3

let tree2 = buildTree([1, 2])
console.log(diameterOfBinaryTree(tree2)) // Output should be 1

module.exports = { diameterOfBinaryTree, tree1, tree2 }
