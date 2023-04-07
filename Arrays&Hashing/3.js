var twoSum = function (nums, target) {
  let result = []
  loop: for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result.push(i)
        result.push(j)
        break loop
      }
    }
  }
  return result
  //   for (let i = 0; i < nums.length; i++) {
  //     const diff = target - nums[i]
  //     const diffIndex = nums.indexOf(diff)
  //     if (diffIndex !== -1 && diffIndex !== i) return [i, diffIndex]
  //   }
}

twoSum([3, 6, 2, 6], 5)
