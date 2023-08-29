const containsDuplicate = (nums) => {
  // create array for unique elements storage
  let arr = []
  // loop over given array
  nums.forEach((el) => {
    // push unique elements to new array
    if (!arr.includes(el)) arr.push(el)
  })
  // check if the new unique element's array length is equal to given array length
  return arr.length !== nums.length
}

module.exports = containsDuplicate