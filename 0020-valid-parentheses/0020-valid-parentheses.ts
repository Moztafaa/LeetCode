function isValid(s: string): boolean {
  const closingToOpening = {
    '}': '{',
    ']': '[',
    ')': '(',
  }

  const chars = s.split('')
  let stack: string[] = []

  for (let i = 0; i < chars.length; i++) {
    let curElement = chars[i]
    if (curElement in closingToOpening) {
      const pop = stack.pop()
      if (closingToOpening[curElement] === pop) {
        continue
      } else {
        return false
      }
    } else {
      stack.push(curElement)
    }
  }
  return stack.length <= 0
}
