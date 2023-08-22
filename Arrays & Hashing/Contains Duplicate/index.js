const containsDuplicate = (nums) => {
  let arr = []
  nums.forEach((el) => {
    if (!arr.includes(el)) arr.push(el)
  })
  return arr.length !== nums.length
}

module.exports = containsDuplicate