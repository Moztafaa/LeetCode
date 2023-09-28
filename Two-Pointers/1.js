/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  if (s === ' ') return true;
  let trun = trancate(s);
  let l = 0,
    r = trun.length - 1;
  while (l < r) {
    if (trun[l] !== trun[r]) return false;
    l++;
    r--;
  }
  return true;
};

function trancate(str) {
  let arr = str.toLowerCase();
  arr = arr.split('');

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] >= 'a' && arr[i] <= 'z') || (arr[i] >= '0' && arr[i] <= '9')) {
      result.push(arr[i]);
    }
  }
  return result.join('');
}

function pali(str) {
  let ltr = [],
    rtl = [];
  for (let i = 0; i < str.length; i++) {
    ltr.push(str[i]);
  }
  for (let i = str.length - 1; i >= 0; i--) {
    rtl.push(str[i]);
  }
  return ltr.join('') == rtl.join('') ? true : false;
}

let s = 'all#@#llllla';
console.log(isPalindrome(s));
