const { invertTree, TreeNode } = require('./index')

function arrayToTree(arr, index = 0) {
  if (index >= arr.length || arr[index] === null) {
    return null
  }

  let node = new TreeNode(arr[index])
  node.left = arrayToTree(arr, 2 * index + 1)
  node.right = arrayToTree(arr, 2 * index + 2)

  return node
}

function treeToArray(root) {
  let output = []
  let queue = [root]
  while (queue.length) {
    let node = queue.shift()
    if (node) {
      output.push(node.value)
      queue.push(node.left)
      queue.push(node.right)
    } else {
      output.push(null)
    }
  }

  while (output[output.length - 1] === null) {
    output.pop()
  }

  return output
}

describe('inverting binary tree testcases', () => {
  it('test case one', () => {
    let tree = arrayToTree([4, 2, 7, 1, 3, 6, 9])
    let invertedTree = invertTree(tree)
    expect(treeToArray(invertedTree)).toEqual([4, 7, 2, 9, 6, 3, 1])
  })
})
