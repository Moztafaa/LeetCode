/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function (nums) {
	// nums = nums.sort();
	// for (let i = 0; i < nums.length; i++) {
	// 	if (nums[i] == nums[++i]) return true;
	// }
	// return false;
	let numSet = new Set(nums);
	for (let item of nums) {
		numSet.add(item);
	}
	if (nums.length == numSet.size) return false;
	else return true;
};
