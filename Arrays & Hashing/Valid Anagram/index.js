const isAnagram = (s, t) => {
  if(s.length !== t.length) return false
  return s.split('').sort().join('') === t.split('').sort().join('')
}

module.exports = isAnagram