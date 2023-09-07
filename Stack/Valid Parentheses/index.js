const isValidParentheses = (s) => {
  let stack = []
  const mappingChars = { ')': '(', '}': '{', ']': '[' }
  for(let el of s) {
    if(mappingChars[el]) {
      const topElement = stack.length === 0 ? '#' : stack.pop()
      if(mappingChars[el] !== topElement) return false
    } else {
      stack.push(el)
    }
  }
  return stack.length === 0
}

module.exports = isValidParentheses