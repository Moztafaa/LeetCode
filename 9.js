/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let set = new Set(nums);
  set = [...set].sort((a, b) => a - b);

  let max = [];
  let count = 0;
  for (let i = 0; i < set.length; i++) {
    if (i == 0) {
      count++;
      max.push(count);
    }
    if (set[i] - 1 === set[i - 1]) {
      count++;
      max.push(count);
    } else {
      count = 1;
    }
  }
  let maxLen;
  if (max.length == 0) {
    maxLen = 0;
  } else {
    maxLen = Math.max(...max);
  }
  console.log(maxLen);
  return maxLen;
};

function countingSort(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let count = Array(max - min + 1).fill(0);
  let i = 0;
  let j = 0;

  for (i = 0; i < arr.length; i++) {
    count[arr[i] - min]++;
  }

  for (i = min; i <= max; i++) {
    while (count[i - min] > 0) {
      arr[j++] = i;
      count[i - min]--;
    }
  }

  return arr;
}

let nums = [0];
longestConsecutive(nums);

/**
 * [0,1,2,3,4,10,11,12,13]
 *  1 2 3 4 5
 */
