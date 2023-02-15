/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
	//sort s and t;
	// let sArr = s.split("");
	// let tArr = t.split("");
	// sArr.sort();
	// tArr.sort();
	// if (sArr.length != tArr.length) return false;
	// for (let i = 0; i < sArr.length; i++) {
	// 	if (sArr[i] != tArr[i]) return false;
	// }
	// return true;

	if (s.length !== t.length) return false;
	let ss = [],
		tt = [];
	for (let i of s) ss.push(i);
	for (let i of t) tt.push(i);

	ss = ss.sort().join("");

	tt = tt.sort().join("");
	return ss == tt;
};
