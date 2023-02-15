var groupAnagrams = function (strs) {
	let map = {};
	for (let i = 0; i < strs.length; i++) {
		let str = strs[i];
		let key = str.split("").sort().join("");
		if (map[key] === undefined) {
			map[key] = [str];
		} else {
			map[key].push(str);
		}
	}
	let result = [];
	for (let key in map) {
		result.push(map[key]);
	}
	return result;
};
