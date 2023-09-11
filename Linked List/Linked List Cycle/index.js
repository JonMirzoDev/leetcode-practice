class ListNode {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}

const hasCycle = (head) => {
  let slow = head,
    fast = head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) return true
  }
  return false
}

// Create nodes
let node1 = new ListNode(3)
let node2 = new ListNode(2)
let node3 = new ListNode(0)
let node4 = new ListNode(-4)

// Link nodes to form a cycle
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node2

module.exports = { hasCycle, node1 }
