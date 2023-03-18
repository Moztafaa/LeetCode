/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let res = []
  let prefix = [],
    left = 1
  let postfix = [],
    right = 1
  for (let i = 0; i < nums.length; i++) {
    prefix[i] = left * nums[i]
    left = prefix[i]
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    postfix[i] = right * nums[i]
    right = postfix[i]
  }
  for (let i = 0; i < nums.length; i++) {
    if (prefix[i - 1] === undefined) {
      res[i] = 1 * postfix[i + 1]
    } else if (postfix[i + 1] === undefined) {
      res[i] = prefix[i - 1] * 1
    } else {
      res[i] = prefix[i - 1] * postfix[i + 1]
    }
  }
  return res
}

let nums = [1, 2, 3, 4]
console.log(productExceptSelf(nums))
