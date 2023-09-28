function checkInclusion(s1: string, s2: string): boolean {
  if (s1.length > s2.length) return false
  // put s1 in a map
  const map = new Map()
  for (let i = 0; i < s1.length; i++) {
    map.set(s1[i], map.get(s1[i]) + 1 || 1)
  }
  let left = 0
  let size = s1.length
  let right = size - 1
  while (right < s2.length) {
    const tempMap = new Map(map)
    for (let i = left; i <= right; i++) {
      if (!tempMap.has(s2[i])) break
      if (tempMap.get(s2[i]) === 1) tempMap.delete(s2[i])
      else tempMap.set(s2[i], tempMap.get(s2[i]) - 1)
    }
    if (tempMap.size === 0) return true
    left++
    right++
  }
  return false
}
