function maxArea(height: number[]): number {
  let max: number = 0
  let l: number = 0,
    r: number = height.length - 1
  while (l < r) {
    let area: number = Math.min(height[r], height[l]) * (r - l)
    max = Math.max(max, area)
    if (height[l] < height[r]) {
      l++
    } else {
      r--
    }
  }
  return max
}
