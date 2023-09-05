function ListNode(val, next = null) {
  this.val = val
  this.next = next
}

function arrayToList(arr) {
  if (arr.length === 0) return null
  let head = new ListNode(arr[0])
  let current = head
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i])
    current = current.next
  }
  return head
}

function listToArray(head) {
  let arr = []
  while (head !== null) {
    arr.push(head.val)
    head = head.next
  }
  return arr
}

function mergeTwoLists(arr1, arr2) {
  let l1 = arrayToList(arr1)
  let l2 = arrayToList(arr2)

  let dummy = new ListNode(-1)
  let current = dummy

  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      current.next = l1
      l1 = l1.next
    } else {
      current.next = l2
      l2 = l2.next
    }
    current = current.next
  }

  current.next = l1 !== null ? l1 : l2

  return listToArray(dummy.next)
}

module.exports = mergeTwoLists
