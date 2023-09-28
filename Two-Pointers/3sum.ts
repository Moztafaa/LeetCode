function threeSum(nums: number[]): number[][] {
    const res: number[][] = []
    nums = nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        let a = nums[i]
        if (i > 0 && a === nums[i - 1]) {
            continue
        }
        let l = i + 1,
            r = nums.length - 1

        while (l < r) {
            let sum = a + nums[l] + nums[r]
            if (sum > 0) {
                r--
            } else if (sum < 0) {
                l++
            } else {
                res.push([a, nums[l], nums[r]])
                r--
                l++
                while (l < r && nums[l] === nums[l - 1]) l++
                while (l < r && nums[r] === nums[r + 1]) r--
            }
        }
    }
    return res
}
