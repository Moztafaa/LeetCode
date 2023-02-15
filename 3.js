var twoSum = function (nums, target) {
	// let result = [];
	// for (let i = 0; i < nums.length; i++) {
	// 	for (let j = i + 1; j < nums.length; j++) {
	// 		if (nums[i] + nums[j] === target) {
	// 			result.push(i);
	// 			result.push(j);
	// 		}
	// 	}
	// }
	// return result;
	for (let i = 0; i < nums.length; i++) {
		const diff = target - nums[i];
		const diffIndex = nums.indexOf(diff);
		if (diffIndex !== -1 && diffIndex !== i) return [i, diffIndex];
	}
};
