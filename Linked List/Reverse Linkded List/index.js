class ListNode {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}

const arrayToList = (arr) => {
  let dummy = new ListNode()
  let current = dummy
  for (let val of arr) {
    current.next = new ListNode(val)
    current = current.next
  }
  return dummy.next
}

const listToArray = (head) => {
  const arr = []
  while (head) {
    arr.push(head.val)
    head = head.next
  }
  return arr
}

const reverseList = (head) => {
  let isArray = false

  if (Array.isArray(head)) {
    isArray = true
    head = arrayToList(head)
  }

  let prev = null
  let current = head

  while (current !== null) {
    let nextTemp = current.next
    current.next = prev
    prev = current
    current = nextTemp
  }

  return isArray ? listToArray(prev) : prev
}


module.exports = reverseList
