function lengthOfLongestSubstring(s: string): number {
  let sa = s.split('')
  let l = 0,
    r = 0
  let subArr = []
  let set = new Set()
  while (r < sa.length) {
    if (!set.has(sa[r])) {
      set.add(sa[r])
      r++
    } else {
      subArr.push(sa.slice(l, r))
      set.delete(sa[l])
      l++
    }
  }
  subArr.push(sa.slice(l, r))
  subArr = subArr.sort((a, b) => b.length - a.length)
  return subArr[0].length
}
console.log(lengthOfLongestSubstring('abcabcbb'))
