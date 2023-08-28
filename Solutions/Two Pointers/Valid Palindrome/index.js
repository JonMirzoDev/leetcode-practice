const isPalindrome = (s) => {
  const cleanedStr = s.toLowerCase().replace(/[\W_]+/g, '')
  return cleanedStr === cleanedStr.split('').reverse().join('')
}

module.exports = isPalindrome