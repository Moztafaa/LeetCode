/**
 * @param {number[]} nums
 * @return {number[]}
 */

var productExceptSelf = function (nums) {
  let pre = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i - 1] === undefined) {
      pre[i] = nums[i]
    } else {
      pre[i] = pre[i - 1] * nums[i]
    }
  }
  let post = 1
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i + 1] === undefined) {
      pre[i] = pre[i - 1]
      post = nums[i]
    } else {
      pre[i] = (pre[i - 1] === undefined ? 1 : pre[i - 1]) * post
      post *= nums[i]
    }
  }
  return pre
}

let nums = [-1, 1, 0, -3, 3]
console.log(productExceptSelf(nums))
