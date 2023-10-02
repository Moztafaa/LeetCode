// function isValid(s: string): boolean {
//   const closingToOpening = {
//     '}': '{',
//     ']': '[',
//     ')': '(',
//   }
//
//   const chars = s.split('')
//   let stack: string[] = []
//
//   for (let i = 0; i < chars.length; i++) {
//     let curElement = chars[i]
//     if (curElement in closingToOpening) {
//       const pop = stack.pop()
//       // @ts-ignore
//       if (closingToOpening[curElement] === pop) {
//         continue
//       } else {
//         return false
//       }
//     } else {
//       stack.push(curElement)
//     }
//   }
//   return stack.length <= 0
// }

function isValid(s: string): boolean {
  let stack: string[] = []
  if (s.length === 1) return false
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ')') {
      let pop = stack.pop()
      if (pop !== '(') return false
    } else if (s[i] === '}') {
      let pop = stack.pop()
      if (pop !== '{') return false
    } else if (s[i] === ']') {
      let pop = stack.pop()
      if (pop !== '[') return false
    } else {
      stack.push(s[i])
    }
  }
  return stack.length === 0
}
