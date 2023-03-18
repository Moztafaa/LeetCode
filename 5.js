/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let map = {}
  for (let num of nums) {
    if (map[num]) {
      map[num]++
    } else {
      map[num] = 1
    }
  }

  // sort the map desc by the map values
  const sortedArray = Array.from(Object.entries(map)).sort(
    (a, b) => b[1] - a[1]
  )

  let res = []
  for (let i = 0; i < k; i++) {
    let x = +sortedArray[i][0]
    res.push(x)
  }
  return res

  //another sol but slower
  // sortedArray.length = k
  // return sortedArray.map((x) => +x[0])
}

// write a test for this function

// Path: 6.js
let nums = [4, 1, -1, 2, -1, 2, 3],
  k = 2

let res = topKFrequent(nums, k)
console.log(res)
